const express = require("express");
const router = express.Router();

const  authMiddleware = require("../middleware/auth.middleware");
const {isAdmin, isMahasiswa} = require("../middleware/role.middleware");
const validateActivity = require("../middleware/validateActivity.middleware");

const {
  getActivities,
  createActivity,
  updateActivity,
  joinActivity,
} = require("../controllers/activity.controller");

router.get("/", authMiddleware, getActivities);

router.post(
  "/",
  authMiddleware,
  isAdmin,
  validateActivity,
  createActivity
);

router.put(
  "/:id",
  authMiddleware,
  isAdmin,
  validateActivity,
  updateActivity
);

router.post(
  "/:id/join",
  authMiddleware,
  isMahasiswa,
  joinActivity
);

module.exports = router;