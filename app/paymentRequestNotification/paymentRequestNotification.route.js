const { Router } = require("express");
const router = Router();
const {receiveNotification, basicAuth} = require("./paymentRequestNotification.controller");


router.route("/paymentRequest/notify").post(basicAuth, receiveNotification);

module.exports = router;
