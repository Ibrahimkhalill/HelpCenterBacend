const { Sequelize } = require("sequelize");
const dbConfig = require("../config/db.config");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,

  define: {
    freezeTableName: true,
  },
  define: {
    timestamps: false, // Disable timestamps for all models
  },
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const Answer = require("./Answer")(sequelize, Sequelize);
const FAQ = require("./FAQ")(sequelize, Sequelize);
const Message = require("./Message")(sequelize, Sequelize);
const Question = require("./Question")(sequelize, Sequelize);
const Service = require("./Service")(sequelize, Sequelize);
const SoftwareName = require("./SoftwareName")(sequelize, Sequelize);
const Status = require("./Status")(sequelize, Sequelize);
const Ticket = require("./Ticket")(sequelize, Sequelize);
const TicketSupport = require("./TicketSupport")(sequelize, Sequelize);

//faq foreignkey
SoftwareName.hasMany(FAQ, { foreignKey: "software_name_id" });
FAQ.belongsTo(SoftwareName, { foreignKey: "software_name_id" });

// ticket foreignkey
SoftwareName.hasMany(Ticket, {
  foreignKey: "software_name_id",
  onDelete: "RESTRICT", // Prevent deletion of parent rows if they have related child rows
  onUpdate: "RESTRICT",
});
Ticket.belongsTo(SoftwareName, {
  foreignKey: "software_name_id",
  onDelete: "RESTRICT", // Prevent deletion of parent rows if they have related child rows
  onUpdate: "RESTRICT",
});

Service.hasMany(Ticket, {
  foreignKey: "related_service_id",
  onDelete: "RESTRICT", // Prevent deletion of parent rows if they have related child rows
  onUpdate: "RESTRICT",
});
Ticket.belongsTo(Service, {
  foreignKey: "related_service_id",
  onDelete: "RESTRICT", // Prevent deletion of parent rows if they have related child rows
  onUpdate: "RESTRICT",
});

Answer.hasMany(Question, { foreignKey: "answer_id" });
Question.belongsTo(Answer, { foreignKey: "answer_id" });

Status.hasMany(TicketSupport, { foreignKey: "status_id" });
TicketSupport.belongsTo(Status, { foreignKey: "status_id" });

Ticket.hasOne(TicketSupport, { foreignKey: "ticket_id" });
TicketSupport.belongsTo(Ticket, { foreignKey: "ticket_id" });

Message.hasOne(Question, { foreignKey: "message_id" });
Question.belongsTo(Message, { foreignKey: "message_id" });

Ticket.hasOne(Message, {
  foreignKey: "ticket_id",
});
Message.belongsTo(Ticket, {
  foreignKey: "ticket_id",
});
// Export the sequelize object along with the models
module.exports = {
  sequelize,
  Answer,
  FAQ,
  Message,
  Question,
  Service,
  SoftwareName,
  Status,
  Ticket,
  TicketSupport,
};
