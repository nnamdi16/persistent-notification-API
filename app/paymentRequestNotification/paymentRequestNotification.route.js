const { Router } = require("express");
const router = Router();
const {
    receiveNotification
} = require("./paymentRequestNotification.controller");

router.route("/paymentrequest").post(receiveNotification);

module.exports = router;