const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const Question = sequelize.define("Question", {
    id_question: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    message_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    question: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    answer_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });

  return Question;
};
