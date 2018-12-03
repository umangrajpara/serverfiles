const express = require('express');
const router = express.Router();

router.get('/Authenticate', (req, res, next) => res.json({ msg: "Authentication Process is ON!" }));


module.exports = router;
