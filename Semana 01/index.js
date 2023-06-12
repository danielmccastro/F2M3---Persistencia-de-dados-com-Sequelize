const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('escola.sqlite', (err) => {
  if (err) {
     return console.error(err.message) 
  } else {
    console.log('Conectado ao banco de dados Escola com sucesso!')
  }
// db.run("CREATE TABLE aluno(matricula int primary key, nome varchar(60), email varchar(40), cidade varchar(60))")
})

/*
db.run("INSERT into aluno(matricula, nome, email, cidade) values(22684, 'DANIEL', 'DANIELMCCASTRO@GMAIL.COM', 'VITORIA')")
db.run("INSERT into aluno(matricula, nome, email, cidade) values(33276, 'ANA', 'ANATEMEMAIL@EMAIL.COM', 'SERRA')")
db.run("INSERT into aluno(matricula, nome, email, cidade) values(21364, 'ROGERIO', 'ROGERIOTEMEMAIL@EMAIL.COM', 'ARACRUZ')")
*/

  db.each('select matricula, nome from aluno', (err, row) => {
  if (err) {
    return console.error(err.message)
  } else {
    console.log(`${row.matricula} - ${row.nome}`)
  }
})