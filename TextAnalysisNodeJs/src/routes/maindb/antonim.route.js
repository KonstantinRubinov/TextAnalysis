const express = require("express");
const router = express.Router();
const antonimController = require("../../controllers/maindb/antonim.controller");

router.route("/antonims").get(antonimController.GetAllWords);
router.route("/antonims/:word").get(antonimController.GetWordsBy);
router.route("/antonims/:connectionWord").post(antonimController.PostWord);
router.route("/antonims/:connectionWord").post(antonimController.PostCollection);
router.route("/antonims/:connectionWord").put(antonimController.PutWord);
router.route("/antonims/insert/:connectionWord").put(antonimController.InsertWord);
router.route("/antonims/:wordToRemove").delete(antonimController.DeleteWord);
router.route("/antonims/delete_collection/:word").delete(antonimController.DeleteCollection);

module.exports = router;