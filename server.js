const express = require('express');
const helmet = require('helmet');
const db = require('./data/dbConfig.js');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(logger);

server.get('/', (req, res) => {
   res.status(200).json({ message: 'Server is Running' });
});

function logger(req, res, next) {
   const time = new Date().toLocaleTimeString();
   const date = new Date().toLocaleDateString();
   console.log(
      `${req.method} Request | http://localhost:4000${req.url} | ${date} , ${time}`
   );
   next();
}
module.exports = server;
