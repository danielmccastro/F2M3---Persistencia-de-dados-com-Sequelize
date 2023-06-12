// bibliotecas/modulos utilizados
const database = require('./db/db');
const express = require('express');
const app = express();
const Movie = require('./models/Movie');
const MovieRoutes = require('./routes/routesMovie');
const hand = require('express-handlebars')

// controllers
const MovieControllers = require('./controllers/ControllerMovie');
app.engine('handlebars', hand.engine());
app.set('view engine', 'handlebars');
app.use(express.urlencoded({extended: true}));

app.use(express.json());
app.use(express.static('public'));

// rotas
app.use('/', MovieRoutes);

// sincronismo com o banco de dados
try {
  database.sync()
  .then(() => {
    app.listen(9443, () => console.log('Servidor rodando'))
  })
}
catch(error) {
  console.log('Houve uma falha ao sincronizar com o banco de dados. ', error)
}