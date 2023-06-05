const { DataTypes } = require('sequelize');
const { sequelize } = require('../db/sequelize-config')



const Library = sequelize.define("Library",{
id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefono: {
    type: DataTypes.STRING,
    allowNull: false,
  },createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  deletelogical: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
});


module.exports =  Library ;
