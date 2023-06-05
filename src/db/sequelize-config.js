const { Sequelize } = require('sequelize')


const sequelize = new Sequelize({
  host: "localhost",
  database: "xAcademy",
  username: "root",
  password: "vitto0712$",
  port: 3306,
  dialect: "mysql"
})

const initializeDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexión a la base de datos establecida");
    await sequelize.sync({ force: false });
  } catch (error) {
    console.error("Hubo un error al inicializar la base de datos");
  }
};


module.exports = { sequelize, initializeDB }