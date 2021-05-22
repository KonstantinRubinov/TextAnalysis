const express = require("express");
const router = express.Router();
const tempExpressionsController = require("../../controllers/temporaldb/temp_expressions.controller");

router.route("/temp_expressions").get(tempExpressionsController.GetAllWords);
router.route("/temp_expressions").post(tempExpressionsController.PostWord);
router.route("/temp_expressions/:connectionWord").put(tempExpressionsController.PutWord);
router.route("/temp_expressions/:mongoId").delete(tempExpressionsController.DeleteWord);
router.route("/temp_expressions").delete(tempExpressionsController.DeleteCollection);

module.exports = router;