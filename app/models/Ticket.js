const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const Ticket = sequelize.define("Ticket", {
    id_ticket: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    ticket_no: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    subject: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    related_service_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    software_name_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });
  return Ticket;
};
