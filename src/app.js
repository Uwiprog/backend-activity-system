const express = require("express");
const app = express();

app.use(express.json);

app.get("/", (req, res) => {
  res.send("SERVER OK");
});

const authRoutes = require("./routes/auth.routes");
const activityRoutes = require("./routes/activity.routes");

app.use("/auth", authRoutes);
app.use("/activities", activityRoutes);

module.exports = app;