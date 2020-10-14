const express = require('express')
const router = express.Router()

module.exports = (client) => {
  
  router.get("/quotes", function(req, res) {
    client.query(`
    SELECT quotes.id, first_name, destination_location, price, user_id 
    FROM quotes
    JOIN users on users.id = user_id
    ORDER BY quotes.id DESC 
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

  router.post("/quotesdetails", function(req, res) {
    // console.log(req.body)
    client.query(`
    SELECT quotes.id, first_name, destination_location, price, user_id, departure_location, departure_date, destination_date, num_people, transportation, date_created, email, last_name, phone
    FROM quotes
    JOIN users on user_id = users.id
    WHERE quotes.id = $1
    ;`, [req.body.quote_id])
      .then(data => {
        // console.log(data.rows);
        const quote = data.rows;
        res.json({ quote });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.post('/createuser', function (req, res) {
    client.query(`
    INSERT INTO users (email, first_name, last_name, phone)
    VALUES ($1, $2, $3, $4)
    RETURNING *
    ;`, ['hello@world.com', req.body.name, 'test', '123456789'])
    .then(data => {
      // console.log(data.rows);
      const user = data.rows;
      res.json({ user });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
  });

  router.post('/createquote', function (req, res) {
  console.log("req", req.body)
    
    const randPrice = `$${(Math.random()*1000000).toFixed(0)}`
    //can be change to add proper api
  
    // const people = parseInt(req.body.people);
    client.query(`
    INSERT INTO quotes (user_id, departure_location, destination_location, departure_date, destination_date, num_people, transportation, price)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
    ;`, [req.body.user_id, req.body.departure, req.body.destination, req.body.departDate, req.body.returnDate, req.body.people, req.body.transport, randPrice])
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      console.log(err)
      res
        .status(500)
        .json({ error: err.message });
    });
  });

  return router;
}