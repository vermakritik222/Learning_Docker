const User = require('../models/userModal');

exports.createuser = async (req, res, next) => {
    try {
        console.log(req.body);
        const user = await User.create(req.body);
        res.status(201).json({ status: 'success', user });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: 'fail',
            message: 'failed to send document please try again aster sometime',
        });
    }
};
