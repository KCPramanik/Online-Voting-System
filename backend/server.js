const express = require('express');
const pool = require('./db'); // PostgreSQL connection file
const authMiddleware = require('./middleware/authMiddleware');
const authRoutes = require('./routes/auth');


const app = express();

// Define a port
const PORT = process.env.PORT || 5000;

// Middleware (for JSON parsing)
app.use(express.json());
app.use('/auth', authRoutes);

app.post('/api/register-candidate', authMiddleware, async (req, res) => {
    const params = req.body;
    // console.log(name)

    try {
        //. Check voter ID length === 10 digits
        if (!/^[A-Za-z0-9]{10}$/.test(params.voter_id)) {
            return res.status(400).json({ message: 'Voter ID must be exactly 10 digits!' });
        }
        const existingName = await pool.query(
            'SELECT * FROM registerCandidate'
        );

        // const h = existingName.rows.map((data) => data.name)

        if (!params.name || !params.voter_id) {
            return res.status(401).send('please Enter a data')
        }

        else {
            if (existingName.rows.find((data) => data.voter_id == params.voter_id)) {
                return res.status(400).json({ message: 'Data is already existing' })
            }
            else {
                const result = await pool.query(
                    'INSERT INTO registerCandidate (name,voter_id) VALUES ($1,$2) RETURNING *',
                    [params.name, params.voter_id]
                );
                res.status(201).json({
                    message: 'Register Candidate Succesfuly! ',
                    data: result.rows[0]
                });
            }

        }


    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
})

app.post('/api/create/vote', async (req, res) => {
    const { name, voter_id, vote } = req.body;

    try {
        if (!voter_id || !vote || !name) {
            return res.status(400).json({ message: 'Please enter all required fields' });
        }

        // 1. Check if voter is registered AND name matches voter ID
        const voterCheck = await pool.query(
            'SELECT * FROM registerCandidate WHERE voter_id = $1 AND name = $2',
            [voter_id, name]
        );

        // 2. Check voter ID length === 10 digits
        if (!/^[A-Za-z0-9]{10}$/.test(voter_id)) {
            return res.status(400).json({ message: 'Voter ID must be exactly 10 digits!' });
        }

        if (voterCheck.rows.length === 0) {
            return res.status(404).json({ message: 'Invalid candidate: Name and Voter ID do not match!' });
        }

        // 2. Check if voter has already voted
        const hasVoted = await pool.query(
            'SELECT * FROM candidate WHERE voter_id = $1',
            [voter_id]
        );

        if (hasVoted.rows.length > 0) {
            return res.status(401).json({ message: 'You have already voted!' });
        }

        // 3. Save vote to ballot box
        const newVote = await pool.query(
            'INSERT INTO ballot_box (vote) VALUES ($1) RETURNING *',
            [vote]
        );

        // 4. Save voter into candidate table to track voting
        const newCandidate = await pool.query(
            'INSERT INTO candidate (voter_id, name) VALUES ($1, $2) RETURNING *',
            [voter_id, name]
        );

        return res.status(201).json({
            message: "Vote submitted successfully!",
            ballot_box_data: newVote.rows[0],
            candidate_data: newCandidate.rows[0]
        });

    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
});

app.get('/api/filter/ballot-box', authMiddleware, async (req, res) => {
    // try {
    //     const result = await pool.query('SELECT * FROM ballot_box')

    //     return res.status(200).json(result.rows)
    // } catch (error) {
    //     res.status(500).json({ error: 'Failed to fetch voting results' });
    // }

    try {
        const result = await pool.query(`
            SELECT vote, COUNT(*) as total_votes
            FROM ballot_box
            GROUP BY vote
        `);
        res.status(200).json(
            result.rows
        );
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Failed to fetch vote results' });
    }
})
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
