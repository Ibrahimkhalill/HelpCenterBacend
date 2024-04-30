const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const Answer = sequelize.define("Answer", {
    id_answer: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    answer: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  });

  return Answer;
};
