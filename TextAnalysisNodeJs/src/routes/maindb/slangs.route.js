const express = require("express");
const router = express.Router();
const slangsController = require("../controllers/slangs.controller");

router.route("/slangs").get(slangsController.GetAllWords);
router.route("/slangs").post(slangsController.PostWord);
router.route("/slangs/:connectionWord").put(slangsController.PutWord);
router.route("/slangs/:wordToRemove").delete(slangsController.DeleteWord);
router.route("/slangs").delete(slangsController.DeleteCollection);

module.exports = router;