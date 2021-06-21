const bcrypt = require('bcryptjs');

const User = require('../models/user');

exports.signUp = async (req, res, next) => {
    const { username, password } = req.body;
    const hashPassword = await bcrypt.hash(password, 12);

    try {
        const newUser = await User.create({
            username,
            password: hashPassword
        });

        res.status(201).json({
            status: 'success',
            data: {
                user: newUser
            }
        });
    } catch (error) {
        res.status(400).json({
            status: 'error',
            message: error
        });
    }
};

exports.signIn = async (req, res, next) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(400).json({
                status: 'error',
                message: "User not found"
            });
        }

        const isCorrect = await bcrypt.compare(password, user.password);
        if (!isCorrect) {
            return res.status(400).json({
                status: 'error',
                message: "incorrect username or password"
            });
        }

        res.status(200).json({
            status: 'success'
        });
    } catch (error) {
        res.status(400).json({
            status: 'error',
            message: error
        });
    }
};
