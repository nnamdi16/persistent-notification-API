const { Router } = require("express");
const router = Router();
const {receiveNotification, basicAuth} = require("./notification.controller");


router.route("/delegate/notify").post(basicAuth, receiveNotification);

module.exports = router;
