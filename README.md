# F2M3---Persistencia-de-dados-com-Sequelize
Curso de persistencia de dados com Nodejs pelo projeto Reprograme-se do Instituto Federal do Espírito Santo

---

## Atividade prática da 1ª semana

Nesta atividade você vai colocar em prática o conteúdo abordado na semana.

ESTA ATIVIDADE SERÁ DESENVOLVIDA NO REPL.IT E DEVERÁ SER POSTADA NESTA TAREFA EM ARQUIVO ZIP, CONFORME ORIENTAÇÕES ABAIXO:

Você deve criar um Banco de dados simples no Sqlite, sem a utilização do Sequelize.

O banco de dados deve possuir a tabela aluno com os seguintes campos (atributos):

MATRICULA, INT, CHAVE PRIMÁRIA

NOME, VARCHAR(60)

EMAIL, VARCHAR(40)

CIDADE, VARCHAR(60)

Para realizar a atividade prática, você deve seguir as etapas abaixo:

1 - Crie uma pasta no Repl it, crie seu arquivo index.js  e coloque os comandos para a criação do banco de dados.

2 - O banco de dados deve ter o nome de escola.sqlite.

3 - Crie a tabela com os atributos e restrições informadas na tabela acima.

4 - Coloque três registros de alunos na tabela, sendo um deles, com suas informações.

5 - Mostre no console a matricula e o nome dos três alunos.


----

## Atividade prática da 2ª semana

Nessa atividade você vai colocar em prática o conteúdo abordado na Semana 2. 

ESSA ATIVIDADE  SERÁ DESENVOLVIDA NO REPL.IT E DEVERÁ SER POSTADA NESTA TAREFA EM ARQUIVO ZIP E NO REPL. IT CONFORME ORIENTAÇÕES ABAIXO:

Orientações:

1 - Assista ao vídeo das aulas da semana.

2 - Leia em paralelo o material das aulas.

3 - Acesse o Replit.

4 - Você vai utilizar o banco de dados desenvolvido na semana.

5 - Utilizando o ORM Sequelize, insira 3 novos setores (Contabilidade, Diretoria e Recursos humanos na tabela setor do banco de dados criado com todas as informações referentes a tabela setor.

6 - Exclua o setor Contabilidade do banco de dados.

7 - Altere o nome do setor Recursos Humanos para Departamento Pessoal.

8 - Liste todos os setores da tabela na tela.

9 - Salve o código no seu computador.

10 - Compacte o arquivo.

11 - Envie o arquivo aqui.

12 - Poste sua atividade no Repl. it.

13 - Disponibileze aqui, o link do Repl. it.

----

## Atividade prática da 3ª semana

Nessa atividade você vai colocar em prática o conteúdo abordado na Semana 3. 

ESSA ATIVIDADE  SERÁ DESENVOLVIDA NO REPL.IT E DEVERÁ SER POSTADA NESTA TAREFA EM ARQUIVO ZIP, CONFORME ORIENTAÇÕES ABAIXO:

Orientações:

1 - Assista aos vídeos das aulas desta semana.
2 - Leia em paralelo os materiais das aulas desta semana.
3 - Acesse o Replit.
4 - Você vai utilizar a aplicação desenvolvida durante a semana.
5 - Utilizando o ORM Sequelize, crie um model chamado fornecedor.js dentro da pasta models.
6 - Crie o model fornecedor com os seguintes campos:

        id tipo int restrição primary key;
        nome tipo string;
        telefone tipo string;
        email tipo string;

7 - Crie o formulário para inserção dos campos do fornecedor chamado formFornecedor.html dentro da pasta views com os campos para inserção dos dados do fornecedor. O action do formulário deve ser /addfornecedor e method="post"

8 - No arquivo index.js, crie a rota POST para a operação create (criar) registros na tabela fornecedor.

9 - Insire 3 registros na tabela fornecedores.

-----

## Atividade prática da 4ª semana

Nessa atividade você terá a opurtunidade de colocar em prática todos os ensinamentos do módulo de persistência de dados.

O intuito da aplicação é proporcionar uma análise de como é a construção de uma aplicação utilizando os padrões de desenvolvimento utilizados no mercado.

ESSA ATIVIDADE  SERÁ DESENVOLVIDA NO REPL.IT E DEVERÁ SER POSTADA NESTA TAREFA EM ARQUIVO ZIP, CONFORME ORIENTAÇÕES ABAIXO:

Orientações:

1 - Assista ao vídeo das aulas do módulo.

2 - Leia em paralelo o material das aulas.

3 - Acesse o Replit.

4 - Utilizando o padrão MVC, o banco de dados sqlite, ORM sequelize, express e bootstrap faça a criação de uma aplicação para armazenar a lista de seus filmes preferidos.

5 - O model deverá ter os seguintes atributos:

        id_filme tipo int restrição primary key;
        titulo tipo string;
        categoria tipo string;
        genero tipo string;
        link_sinopse tipo string;

6 - Faça o CRUD da aplicação.

7 - Faça o models, controllers e views da aplicação.

8 - Aplicação deverá possuir views de cadastro, atualizar, listar e excluir registros.

9 - Disponibilize aqui o link do repl.it.

10 - Envie somente os arquivos e o banco de dados zipados aqui.


