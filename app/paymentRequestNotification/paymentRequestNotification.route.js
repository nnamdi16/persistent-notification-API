const { Router } = require("express");
const router = Router();
const {receiveNotification, basicAuth} = require("./paymentRequestNotification.controller");


router.route("/paymentRequest").post(basicAuth, receiveNotification);

module.exports = router;
