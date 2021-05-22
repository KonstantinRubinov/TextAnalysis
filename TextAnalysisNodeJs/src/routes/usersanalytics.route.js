const express = require("express");
const router = express.Router();
const usersAnalyticsController = require("../controllers/usersAnalytics.controller");

router.route("/users_analitics").get(usersAnalyticsController.GetAllUserAnalitics);
router.route("/users_analitics/:startDate/:endDate").get(usersAnalyticsController.GetUserAnaliticsByDates);
router.route("/users_analitics/start/:startDate").get(usersAnalyticsController.GetUserAnaliticsByStart);
router.route("/users_analitics/end/:endDate").get(usersAnalyticsController.GetUserAnaliticsByEnd);

module.exports = router;