var express = require('express');
var router = express.Router()



router.get('/', (req, res) => res.send('Hijaby API Work! :)'))

module.exports = router;