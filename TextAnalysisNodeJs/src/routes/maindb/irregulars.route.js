const express = require("express");
const router = express.Router();
const irregularsController = require("../../controllers/maindb/irregulars.controller");

router.route("/irregulars").get(irregularsController.GetAllWords);
router.route("/irregulars").post(irregularsController.PostWord);
router.route("/irregulars/:connectionWord").put(irregularsController.PutWord);
router.route("/irregulars/:wordToRemove").delete(irregularsController.DeleteWord);
router.route("/irregulars").delete(irregularsController.DeleteCollection);

module.exports = router;