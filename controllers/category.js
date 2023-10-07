const pool = require("../queries.js");


const getCategory = (req, res) => {
  pool.query("SELECT * FROM category", (err, result) => {
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
  getCategory,
};
