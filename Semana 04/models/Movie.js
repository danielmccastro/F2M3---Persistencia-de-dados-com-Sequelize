const Sequelize = require('sequelize');
const database = require('../db/db');

const Movie = database.define('movie', {
  id_filme: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  titulo: {
    type: Sequelize.STRING,
    allowNull: false
  },
  categoria: {
    type: Sequelize.STRING,
    allowNull: false
  },
  genero: {
    type: Sequelize.STRING,
    allowNull: false
  },
  link: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {database, modelname: 'movie', tableName: 'movies'})

module.exports = Movie;