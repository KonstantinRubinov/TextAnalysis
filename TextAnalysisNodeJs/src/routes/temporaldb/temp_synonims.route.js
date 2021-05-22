const express = require("express");
const router = express.Router();
const tempSynonimsController = require("../../controllers/temporaldb/temp_synonim.controller");

router.route("/temp_synonims").get(tempSynonimsController.GetAllWords);
router.route("/temp_synonims").post(tempSynonimsController.PostWord);
router.route("/temp_synonims/:connectionWord").put(tempSynonimsController.PutWord);
router.route("/temp_synonims/insert/:connectionWord").put(tempSynonimsController.InsertWord);
router.route("/temp_synonims/:mongoId").delete(tempSynonimsController.DeleteWord);
router.route("/temp_synonims").delete(tempSynonimsController.DeleteCollection);

module.exports = router;