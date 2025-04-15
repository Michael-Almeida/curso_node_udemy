const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("nodeSequelize", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

// try {
// } catch (error) {
//   sequelize.authenticate();
//   console.log("Conexão com sequelize realizada com sucesso!");

//   console.log("Erro ao conectar com sequelize", error);
// }

module.exports = sequelize;
