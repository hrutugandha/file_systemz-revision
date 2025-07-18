const express = require('express');

const User = require('../models/user.models');

const router = express.Router();

const uploads = require('../middlewares/uploads');

router.post('/', uploads, async (req, res) => {
    try {
        const users = await User.find().lean().exec();
        return res.status(200).send(users);
    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
});

router.post('/create', async (req, res) => {
    try {
        
        const user = await User.create(req.body);
        return res.status(201).send(user);
    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
}
);

module.exports = router;