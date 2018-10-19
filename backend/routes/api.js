let express = require('express');
let Song = require('../models/hello');
let router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
    res.json({
        status: 200,
        message: 'success',
        data: []
    });
});

module.exports = router;