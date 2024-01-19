const express = require("express");
const path = require("path");
const cors = require("cors");
const mongoose = require("./database/db");

const app = express();
const PORT = 3000;

// ! Middlewares
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// ! Routing
app.use("/", require("./routes/listRoute"));
app.use("/lists", require("./routes/taskRoute"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
