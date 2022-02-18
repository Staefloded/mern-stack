const express = require("express");
const { getGoals, setGoals, updateGoals, deleteGoals } = require("../controllers/goalController");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getGoals).post(protect, setGoals);
router.route("/:id").delete(protect, deleteGoals).put(protect, updateGoals);

module.exports = router;
