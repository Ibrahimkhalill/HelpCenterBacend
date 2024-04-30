const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const TicketSupport = sequelize.define("TicketSupport", {
    id_ticket_support: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    ticket_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    status_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    last_update: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  });

  return TicketSupport;
};
