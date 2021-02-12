const { Router } = require("express");
const router = Router();
const {receiveNotification, basicAuth} = require("./notification.controller");


router.route("/paga-test/ws/delegate/notify").post(basicAuth, receiveNotification);

module.exports = router;
