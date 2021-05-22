const express = require("express");
const router = express.Router();
const tempIrregularsController = require("../controllers/temp_irregulars.controller");

router.route("/temp_irregulars").get(tempIrregularsController.GetAllWords);
router.route("/temp_irregulars").post(tempIrregularsController.PostWord);
router.route("/temp_irregulars/:connectionWord").put(tempIrregularsController.PutWord);
router.route("/temp_irregulars/:mongoId").delete(tempIrregularsController.DeleteWord);
router.route("/temp_irregulars").delete(tempIrregularsController.DeleteCollection);

module.exports = router;