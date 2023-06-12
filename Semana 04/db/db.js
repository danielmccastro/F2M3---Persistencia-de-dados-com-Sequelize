// bibliotecas/ modulos utilizados
const Sequelize = require('sequelize');
// criando a configuracao do banco de dados
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './cinemateca.sqlite'
})
// tratando possiveis erros e autenticacao no banco
try {
  sequelize.authenticate();
  console.log('Banco de dados conectado com sucesso!');
}
catch(error) {
  console.log('Erro ao conectar ao banco de dados. ', error);
}
// exportar o modulo
module.exports = sequelize;