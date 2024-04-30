const { Message, TicketSupport, Question } = require("../models/index");
async function saveMessage(req, res) {
  try {
    const ticketData = req.body;

    const MessageData = await Message.create({
      ticket_id: ticketData.id_ticket,
      message: ticketData.message,
      date: ticketData.date,
    });
    const QuestionData = await Question.create({
      message_id: MessageData.id_message,
    });

    const ticketSupportData = await TicketSupport.update(
      {
        status_id: ticketData.status_id,
      },
      {
        where: {
          id_ticket_support: ticketData.id_ticket_support,
        },
      }
    );
    console.log(
      "Data inserted successfully:",
      ticketSupportData,
      MessageData,
      QuestionData
    );
    res.status(200).json(MessageData);
  } catch (error) {
    console.error("Error inserting data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = {
  saveMessage,
};
