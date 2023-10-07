const pool = require("../queries.js");

const getFilm = (req, res) => {
  pool.query("SELECT * FROM film", (err, result) => {
    if (err) {
      throw err;
    }
    res.send(result.rows);
  });
};

const getFilmId = (req, res) => {
  const filmId = parseInt(req.params.id);
  pool.query("SELECT * FROM film where film_id = $1" ,[filmId],(err, result) => {
    if (err) {
      throw err;
    }
    res.send(result.rows);
  });
};

const getCategory = (req, res) => {
  pool.query("SELECT * FROM category" ,(err, result) => {
    if (err) {
      throw err;
    }
    res.send(result.rows);
  });
};

const getFilmCategory = (req, res) => {
  pool.query("select film.film_id, film.title, category.name from film join category on category.category_id = film.film_id;" ,(err, result) => {
    if (err) {
      throw err;
    }
    res.send(result.rows);
  });
};



pool.connect((err, res) => {
  console.log(err);
  console.log("connect");
});

module.exports = {
  getFilm,
  getFilmId,
  getCategory,
  getFilmCategory,
};
