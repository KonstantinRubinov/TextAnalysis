const express = require("express");
const router = express.Router();
const synonimsController = require("../../controllers/maindb/synonim.controller");

router.route("/synonims").get(synonimsController.GetAllWords);
router.route("/synonims/:word").get(synonimsController.GetWordsBy);
router.route("/synonims").post(synonimsController.PostWord);
router.route("/synonims/:connectionWord").put(synonimsController.PutWord);
router.route("/synonims/insert/:connectionWord").put(synonimsController.InsertWord);
router.route("/synonims/:wordToRemove").delete(synonimsController.DeleteWord);
router.route("/synonims/delete_collection/:word").delete(synonimsController.DeleteCollection);

module.exports = router;