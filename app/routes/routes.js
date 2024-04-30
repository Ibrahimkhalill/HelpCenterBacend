const FaqController = require("../controllers/FaqController"); // Adjust the path as needed
const StatusController = require("../controllers/StatusContrller");
const TicketController = require("../controllers/TicketController");
const ServiceController = require("../controllers/ServiceController");
const QuestionController = require("../controllers/QuestionController");
const MessageController = require("../controllers/MessageController");
// Adjust the path as needed
const router = require("express").Router();

// Create a new FAQ
router.post("/api/faq-post", FaqController.saveFaq);
router.get("/api/get-faq", FaqController.getFaq);
router.get("/api/get-status", StatusController.getStatus);

//ticket route
router.post("/api/ticket/post", TicketController.saveTicket);
router.get("/api/ticket/getAll", TicketController.getTicketData);
router.get("/api/ticketSupport/getAll", TicketController.getTicketSupportData);

// service route
router.get("/api/service/getAll", ServiceController.getServiceData);

// question route

router.get("/api/question/getAll", QuestionController.getQuestionData);

// save message 
router.post("/api/post/message", MessageController.saveMessage);


// Export the router
module.exports = router;
