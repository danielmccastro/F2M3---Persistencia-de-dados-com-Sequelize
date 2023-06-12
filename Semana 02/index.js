// Importando as biliotecas
const{ Sequelize, Model, DataTypes} = require("sequelize");
//Abrindo conexão com o Banco de dados ou criando um novo caso não exista
const sequelize = new Sequelize({
  dialect: "sqlite",
storage: "empresa.sqlite"
  });
// definindo a classe setor
class Setor extends Model{
  static init(sequelize){
    super.init({
      idsetor:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      nome:{
        type: DataTypes.STRING(40),
        allowNull: false
      },
       ramal:{
        type: DataTypes.STRING(10),
        allowNull: false
      },
       email:{
        type: DataTypes.STRING(30)
      }
    }, {sequelize, modelName: "setor", tableName: "setores"})
  }
}
// inicialização do modelo create table setor
Setor.init(sequelize);
// definindo a class funcionario
class Funcionario extends Model{
  static init(sequelize){
    super.init({
      matricula:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      idsetor:{
        type: DataTypes.INTEGER,
        references: {
          model: Setor,
          key: "idsetor",
        }
      },
      nome:{
        type: DataTypes.STRING(40),
        allowNull: false
      },
      nascimento:{
        type: DataTypes.DATE
      },
      telefone:{
        type: DataTypes.STRING(15)
      }
    }, {sequelize, modelName: "funcionario", tableName: "funcionarios"})
  }
}
// inicialização do modelo create table setor
Funcionario.init(sequelize);
// sincronismo
(async () => {
  await sequelize.sync({force: true});
  // inserção dos objetos - usando o CREATE
  const setor_create = await Setor.create({nome: "Financeiro", ramal: "2134", email: "financeiro@empresa.com"});
  const setor_create_S = await Setor.create({nome: "Secretaria", ramal: "2135", email: "secretaria@empresa.com"});
  const setor_create_P = await Setor.create({nome: "Portaria", ramal: "2136", email: "portaria@empresa.com"});
  // atualizando objetos - usando o UPDATE
  const setor_chave = await Setor.findByPk(3); // somente busca os dados do setor portaria (primarykey = 3)
  setor_chave.nome = "Estoque";
  const resultado = await setor_chave.save();
  console.log(resultado)
  // excluindo objetos - usando o DELETE
  const setor_delete = await Setor.findByPk(1);
  setor_delete.destroy();

// ATIVIDADE PRATICA SEMANA 02
  
// 5. insira 3 novos setores
  const createSetorContabilidade = await Setor.create({nome: "Contabilidade", ramal: "2137", email: "contabilidade@empresa.com"});
  const createSetorDiretoria = await Setor.create({nome: "Diretoria", ramal: "2138", email: "diretoria@empresa.com"});
  const createSetorRH = await Setor.create({nome: "Recursos Humanos", ramal: "2139", email: "rh@empresa.com"});
  
  const listarSetores = await Setor.findAll();
  console.log(`
  Lista Atualizada de setores:
  ${JSON.stringify(listarSetores, null, 2)}
  `);

// 6. Exclua o setor Secretaria
  const deleteSetorSecretaria = await Setor.findByPk(2);
  deleteSetorSecretaria.destroy();
  
// 7. Altere o nome do setor Recursos Humanos para Departamento Pessoal
  const updateSetorRH = await Setor.findByPk(6);
  updateSetorRH.nome = "Departamento Pessoal";
  const setorDepartamentoPessoal = await updateSetorRH.save();

  // 8. Liste todos os setores da tabela na tela.
  const listarSetoresAtualizados = await Setor.findAll();
  console.log(`
  Lista Atualizada de setores:
  ${JSON.stringify(listarSetoresAtualizados, null, 2)}
  `);
})();