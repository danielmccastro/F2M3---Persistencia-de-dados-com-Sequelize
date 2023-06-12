// importando bibliotecas e arquivos
const database = require('./db');
const Fornecedor = require('./models/fornecedor');
// criando o servidor
const express = require('express');
const app = express();
const porta = 9443;
const bodyParser = require('body-parser');
// setar os valores da view e engine
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));
// definindo rotas
app.get('/', (req, res) => {
  res.render('formFornecedor');
})

// essa parte deveria estar dentro de um controller
app.post('/addfornecedor', (req, res) => {
  Fornecedor.create({
    nome: req.body.nome,
    telefone: req.body.telefone,
    email: req.body.email,
  })
  .then(() => {
     res.send('Fornecedor cadastrado com sucesso!')
  })
})

app.listen(porta, () => { console.log('Servidor rodando') });

(async () => {
  try {
    const resultado = await database.sync();
    const fornecedores = await Fornecedor.findAll();
    console.log(fornecedores)
  }
  catch (error) {
  console.log(error);
  }
})();