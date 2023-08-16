const router = require('express').Router();
const dotenv = require('dotenv')

router.get('/', async(req, res) => {
    res.render('index')
})

module.exports = router;