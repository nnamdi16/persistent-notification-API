const { Router } = require("express");
const router = Router();
const { receiveNotification } = require("./notification.controller");

router.route("/delegate/notify").post(receiveNotification);

module.exports = router;