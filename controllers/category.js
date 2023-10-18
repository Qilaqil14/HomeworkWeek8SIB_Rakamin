const pool = require("../queries.js");


const getCategory = (req, res) => {
  pool.query("SELECT * FROM category", (err, result) => {
    if (err) {
      throw err;
    }
    res.send(result.rows);
  });
};


module.exports = {
  getCategory,
};
