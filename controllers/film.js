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
  const id = req.params.id;
  pool.query(`SELECT * FROM film where film_id = ${id}`,(err, result) => {
    if (err) {
      throw err;
    }
    res.send(result.rows);
  });
};
const getFilmCategory = (req, res) => {
  const category = req.params.category;
  pool.query(
    `SELECT film.film_id AS id,
    film.title AS title,
    film.description AS description, 
    film.last_update AS film_last_update,
    category.name AS category
    FROM film JOIN film_category ON film.film_id = film_category.film_id 
    JOIN category ON film_category.category_id = category.category_id
    WHERE category.name = '${category}'`,
    (err, result) => {
      if (err) {
        throw err;
      }
      res.send(result.rows);
    }
  );
};

module.exports = {
  getFilm,
  getFilmId,
  getFilmCategory,
};
