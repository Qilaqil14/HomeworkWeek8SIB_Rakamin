const router = require("express").Router();
const { getFilm, getFilmId, getFilmCategory } = require("../controllers/film");

router.route("/").get(getFilm);
router.route("/:id").get(getFilmId);
router.route("/:category").get(getFilmCategory);

module.exports = router;