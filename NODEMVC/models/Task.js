const { DatTypes, DataTypes } = require("sequelize");
const db = require("../db/conn.js");

const Task = db.define("Task", {
  title: {
    type: DataTypes.STRING,
    required: true,
  },
  description: {
    type: DataTypes.STRING,
    required: true,
  },
  done: {
    type: DataTypes.BOOLEAN,
    required: true,
  },
});

module.exports = Task;
