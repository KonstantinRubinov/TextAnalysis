const express = require("express");
const router = express.Router();
const wordsController = require("../controllers/words.controller");

router.route("/addSimpleWords").post(wordsController.AddSimpleWords);
router.route("/addIrregularWords").post(wordsController.AddIrregulars);
router.route("/addRelationalWords").post(wordsController.AddRelationalWords);
router.route("/deleteWords").delete(wordsController.DeleteAllWords);

router.route("/addTemporalSimpleWords").post(wordsController.AddTemporalSimpleWords);
router.route("/addTemporalIrregularWords").post(wordsController.AddTemporalIrregulars);
router.route("/addTemporalRelationalWords").post(wordsController.AddTemporalRelationalWords);
router.route("/deleteTemporalWords").delete(wordsController.DeleteAllTemporalWords);

router.route("/getAllTemporalWords").get(wordsController.GetAllTemporalWords);
router.route("/getAllWords").get(wordsController.GetAllWords);

module.exports = router;