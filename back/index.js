const express = require('express');
const server = express();
const PORT = process.env.PORT || 3001;
const { conn } = require('./db');
const { router } = require('./src/routes/index');

server.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Credentials', 'true');
   res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
   );
   res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, DELETE'
   );
   next();
});

server.use(express.json());

server.use('/rickandmorty', router);


server.get('/', (req, res) => {
   res.send('Hello World!');
});

server.listen(PORT, () => {
   //conn.sync({ alter: true }) // Usa alter: true para actualizar sin borrar datos 
   conn.sync({ force: true })
      .then(() => {
         console.log('Server raised in port: ' + PORT);
      })
      .catch(err => {
         console.error('Unable to connect to the database:', err);
      });
});