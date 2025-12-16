const express = require("express");
const router = express.Router();

router.get("/activities", (req, res) => {
    res.json({ message: "Activity router ok"})
})

module.exports = router;