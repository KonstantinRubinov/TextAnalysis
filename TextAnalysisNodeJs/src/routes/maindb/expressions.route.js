const express = require("express");
const router = express.Router();
const expressionsController = require("../controllers/expressions.controller");

router.route("/expressions").get(expressionsController.GetAllWords);
router.route("/expressions").post(expressionsController.PostWord);
router.route("/expressions/:connectionWord").put(expressionsController.PutWord);
router.route("/expressions/:wordToRemove").delete(expressionsController.DeleteWord);
router.route("/expressions").delete(expressionsController.DeleteCollection);

module.exports = router;