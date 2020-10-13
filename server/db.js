const pg = require('pg');
require('dotenv').config()

const client = new pg.Client(process.env.REACT_APP_PG_STRING);

client.connect(function(err) {
  if (err) {
    return console.error('could not connect to PG', err);
  }
  console.log('Database online!');
  
})
  
module.exports = client;