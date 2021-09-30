const { Router } = require("express");
const router = Router();
const { receiveNotification } = require("./notification.controller");

router.route("/checkout/notify").post(receiveNotification);

module.exports = router;