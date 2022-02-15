const express = require("express");
const { getGoals, setGoals, updateGoals, deleteGoals } = require("../controllers/goalController");
const router = express.Router();

router.route("/").get(getGoals).post(setGoals);
router.route("/:id").delete(deleteGoals).put(updateGoals);

module.exports = router;
