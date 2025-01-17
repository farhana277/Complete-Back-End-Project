const jwt = require('jsonwebtoken');

exports.getToken = (req, res) => {
    const token = jwt.sign({ user: 'testUser' }, process.env.JWT_SECRET || 'secret', { expiresIn: '1h' });
    res.json({ token });
};
