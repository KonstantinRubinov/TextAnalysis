const express = require("express");
const router = express.Router();
const tempSlangsController = require("../controllers/temp_slangs.controller");

router.route("/temp_slangs").get(tempSlangsController.GetAllWords);
router.route("/temp_slangs").post(tempSlangsController.PostWord);
router.route("/temp_slangs/:connectionWord").put(tempSlangsController.PutWord);
router.route("/temp_slangs/:mongoId").delete(tempSlangsController.DeleteWord);
router.route("/temp_slangs").delete(tempSlangsController.DeleteCollection);

module.exports = router;