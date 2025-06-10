const jwt = require('jsonwebtoken');
const SECRET_KEY = '12345678!@#$%^&*';

module.exports = (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        console.log('error')
        return res.status(401).json({ error: 'Access denied' });
    }
    // Remove "Bearer " if present
    const tokenWithoutBearer = token.startsWith("Bearer ") ? token.split(" ")[1] : token;
    try {
        const decoded = jwt.verify(tokenWithoutBearer, SECRET_KEY);
        req.adminId = decoded.adminId;
        next();
    } catch (error) {
        console.log('error')

        res.status(401).json({ error: 'Invalid token' });
    }
};