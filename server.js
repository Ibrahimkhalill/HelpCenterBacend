const express = require("express");
const { sequelize } = require("./app/models/index");
const cors = require("cors");
const multer = require("multer");
const uploadRoute = require("./app/routes/routes");
const bodyParser = require("body-parser");
const app = express();
PORT = 8080;
// Set up CORS
var corsOptions = {
  origin: ["http://localhost:3001", "http://localhost:3000"], // Change this to your frontend's URL
};
app.use(cors(corsOptions));

// Set up Multer with disk storage
sequelize
  .sync({ force: false }) // Set force to true to drop existing tables
  .then(() => {
    console.log("Database synced successfully"); 
  })
  .catch((error) => {
    console.error("Error syncing database:", error);
  });

app.use(bodyParser.json());
app.use("/", uploadRoute);

// Define route to handle POST requests

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}.`);
});
