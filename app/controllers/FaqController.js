const { SoftwareName, FAQ } = require("../models/index");

async function saveFaq(req, res) {
  try {
    const faqData = req.body;
    const data = await FAQ.create({
      question: faqData.question,
      answer: faqData.answer,
      software_name_id: faqData.software_name_id,
    });
    console.log("Data inserted successfully:", data);
    res.json(data);
  } catch (error) {
    console.error("Error inserting data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function getFaq(req, res) {
  try {
    // Your code here
    const data = await FAQ.findAll({
      include: SoftwareName,
    });
    res.status(200).json(data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

// Export each function individually
module.exports = {
  saveFaq,
  getFaq,
};
