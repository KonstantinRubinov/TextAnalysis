const express = require("express");
const router = express.Router();
const archaismController = require("../../controllers/maindb/archaism.controller");

router.route("/archaisms").get(archaismController.GetAllWords);
router.route("/archaisms").post(archaismController.PostWord);
router.route("/archaisms/:connectionWord").put(archaismController.PutWord);
router.route("/archaisms/:wordToRemove").delete(archaismController.DeleteWord);
router.route("/archaisms").delete(archaismController.DeleteCollection);

module.exports = router;