const router = require('express').Router()
const { getFilm, getFilmId, getFilmCategory } = require("../controllers/film");
const{getCategory} = require('../controllers/category')

router.route('/film').get(getFilm)
router.route('/film/:id').get(getFilmId)
router.route('/category').get(getCategory)
router.route('/films/:category').get(getFilmCategory)


module.exports = router