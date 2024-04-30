const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const Message = sequelize.define("Message", {
    id_message: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    ticket_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  });

  return Message;
};
