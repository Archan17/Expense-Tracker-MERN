const express = require("express");
const cors = require("cors");
const { db } = require("./db/db");
const { readdirSync } = require("fs");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT;

//middlewares
app.use(express.json());
app.use(cors());

//routes
const routes = readdirSync("./routes").filter((file) => file.endsWith(".js"));
routes.forEach((route) => {
  app.use("/api/v1", require(`./routes/${route}`)); // Mount routes under /api/v1
});

const server = () => {
  db();
  app.listen(PORT, () => {
    console.log("listening to port:", PORT);
  });
};

server();
