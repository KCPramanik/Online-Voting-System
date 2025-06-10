const express = require('express');
const jwt = require('jsonwebtoken');
const pool = require('../db'); // PostgreSQL connection file

const router = express.Router();
const SECRET_KEY = '12345678!@#$%^&*'; // Change this to a secure key

// Admin Register Route
router.post('/register', async (req, res) => {
    const params = req.body;
    // console.log("params", params)

    try {
        // 2. Check voter ID length === 10 digits
        if (!/^\d{10}$/.test(params.phone)) {
            return res.status(400).json({ message: 'Mobile Number must be exactly 10 digits!' });
        }

        if (!params.email_id || !params.password) {

            return res.status(404).json({ message: 'Please Enter a value' })

        } else {

            const emailId = await pool.query('SELECT * FROM admin')

            if (emailId.rows.find((e) => e.email_id === params.email_id)) {
                return res.status(409).json({ message: 'Already register Admin' })

            } else {
                const newAdmin = await pool.query(
                    'INSERT INTO admin (first_name, middle_name, last_name, phone, address, email_id , password) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
                    [params.first_name, params.middle_name, params.last_name, params.phone, params.address, params.email_id.toLowerCase(), params.password]
                );

                return res.status(201).json({
                    message: 'Admin Create Succesfully!',
                    data: newAdmin.rows[0]
                });
            }

        }

    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ message: 'Admin registration failed' });
    }


})
// Admin Login Route
router.post('/login', async (req, res) => {
    const { email_id, password } = req.body;

    try {
        const result = await pool.query('SELECT * FROM admin WHERE email_id = $1', [email_id]);

        if (result.rows.length === 0) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const admin = result.rows[0];
        const passwordMatch = await admin.password === password;


        if (!passwordMatch) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const token = jwt.sign({ adminId: admin.id }, SECRET_KEY, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        console.error('Login Error:', error);
        res.status(500).json({ error: 'Login failed' });
    }
});



module.exports = router;
