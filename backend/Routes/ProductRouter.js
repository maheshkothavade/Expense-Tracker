const ensureAuthenticated = require('../Middlewares/Auth');

const router = require('express').Router();

router.get('/', ensureAuthenticated, (req, res) => {
    console.log('---- logged in user detail ---', req.user);
    res.status(200).json([
        {
            name: "Iphone",
            price: 100000
        },
        {
            name: "tv",
            price: 20000
        }
    ])
});

module.exports = router;