const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
  const FAQ = sequelize.define('FAQ', {
    id_faq: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    question: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    answer: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    software_name_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  }, {
    timestamps: false, // Disable timestamps
  });
  
  return FAQ;
};
