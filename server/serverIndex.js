const express = require('express');
const app = express();
const db = require('./db')
const http = require('http').createServer(app)
const PORT = process.env.PORT || 3001
const bodyParser = require('body-parser');
const Routes = require('./routes')


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', Routes(db))

http.listen(PORT, () => {
  console.log(`Express server is running on port ${PORT}`)
});