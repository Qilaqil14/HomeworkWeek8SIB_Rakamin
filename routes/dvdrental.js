const router = require('express').Router()
const{ getFilm, getFilmId, getCategory, getFilmCategory} = require('../controllers/dvdrental')

router.route('/film').get(getFilm)
router.route('/film/:id').get(getFilmId)
router.route('/category').get(getCategory)
router.route('/filmcategory').get(getFilmCategory)


module.exports = router