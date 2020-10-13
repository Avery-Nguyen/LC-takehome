const express = require('express')
const router = express.Router()

module.exports = (client) => {
  
  router.get("/quotes", function(req, res) {
    client.query(`
    SELECT quotes.id, first_name, destination_location, price, user_id 
    FROM quotes
    JOIN users on users.id = user_id
    ;`)
      .then(data => {
        // console.log(data.rows);
        const quotes = data.rows;
        res.json({ quotes });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.get("/quotesdetails", function(req, res) {
    client.query(`
    SELECT quotes.id, first_name, destination_location, price, user_id, departure_location, departure_date, destination_date, num_people, transportation, date_created, email, last_name, phone
    FROM quotes
    JOIN users on user_id = users.id
    ;`)
      .then(data => {
        // console.log(data.rows);
        const quotes = data.rows;
        res.json({ quotes });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  return router;
}