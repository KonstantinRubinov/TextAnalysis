const express = require("express");
const router = express.Router();
const tempAntonimController = require("../../controllers/temporaldb/temp_antonim.controller");

router.route("/temp_antonims").get(tempAntonimController.GetAllWords);
router.route("/temp_antonims/:connectionWord").post(tempAntonimController.PostWord);
router.route("/temp_antonims/:connectionWord").put(tempAntonimController.PutWord);
router.route("/temp_antonims/insert/:connectionWord").put(tempAntonimController.InsertWord);
router.route("/temp_antonims/:mongoId").delete(tempAntonimController.DeleteWord);
router.route("/temp_antonims").delete(tempAntonimController.DeleteCollection);

module.exports = router;