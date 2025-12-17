const express = require("express");
const app = express();

const loggerMiddleware = require("./middleware/logger.middleware");

app.use(express.json());
app.use (loggerMiddleware)

const authRoutes = require("./routes/auth.routes");
const activityRoutes = require("./routes/activity.routes");

app.use("/auth", authRoutes);
app.use("/activities", activityRoutes);

app.get("/", (req, res) => {
  res.send("SERVER OK");
});


module.exports = app;