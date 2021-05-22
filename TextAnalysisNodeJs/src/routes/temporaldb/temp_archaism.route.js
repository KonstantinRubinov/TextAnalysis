const express = require("express");
const router = express.Router();
const tempArchaismController = require("../../controllers/temporaldb/temp_archaism.controller");

router.route("/temp_archaisms").get(tempArchaismController.GetAllWords);
router.route("/temp_archaisms").post(tempArchaismController.PostWord);
router.route("/temp_archaisms/:connectionWord").put(tempArchaismController.PutWord);
router.route("/temp_archaisms/:mongoId").delete(tempArchaismController.DeleteWord);
router.route("/temp_archaisms").delete(tempArchaismController.DeleteCollection);

module.exports = router;