const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const mongoose = require("mongoose");
const config = require("./config/database");

mongoose.connect(config.database);

mongoose.connection.on("connected", () => {
  console.log("Connected to database " + config.database);
});

mongoose.connection.on("error", err => {
  console.log("Database error: " + err);
});

const app = express();

const port = process.env.PORT || 3000;

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());

require("./config/passport")(passport);

// Routes - begin
app.use(cors());

const users = require("./routes/users");
const stories = require("./routes/stories");
const updates = require("./routes/updates");
const follows = require("./routes/follows");

app.use("/users", users);
app.use("/stories", stories);
app.use("/updates", updates);
app.use("/follows", follows);
// Routes - End

app.get("/", (req, res) => {
  res.send("Invalid endpoint.");
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.listen(port, function() {
  console.log("Server started on port " + port);
});
