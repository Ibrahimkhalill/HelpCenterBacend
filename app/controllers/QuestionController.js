const {
  Question,
  Ticket,
  Answer,
  Service,
  Message,
  SoftwareName,
} = require("../models/index");

async function getQuestionData(req, res) {
  try {
    // Your code here
    const data = await Question.findAll({
      include: [
        {
          model: Message,
          include: {model: Ticket,
            include: [
                { model: Service },
                
                { model: SoftwareName },
              ],
        }
         
        },
        { model: Answer },
      ],
    });
    res.status(200).json(data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

// Export each function individually
module.exports = {
  getQuestionData,
};
