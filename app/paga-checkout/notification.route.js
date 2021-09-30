const { Router } = require("express");
const router = Router();
const { receiveNotification } = require("./notification.controller");

router.route("/checkout/collect").post(receiveNotification);

module.exports = router;