const express = require("express");
const router = express.Router();
const fullAnalyticsController = require("../controllers/fullAnalytics.controller");

router.route("/AnalyseFullText/:limit").post(fullAnalyticsController.AnalyseFullText);
router.route("/allSentencesWords").post(fullAnalyticsController.CompareAllSentencesWords);

module.exports = router;