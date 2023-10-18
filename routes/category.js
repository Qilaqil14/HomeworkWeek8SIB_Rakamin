const router = require('express').Router()

const{getCategory} = require('../controllers/category');

router.route('/').get(getCategory)


module.exports = router