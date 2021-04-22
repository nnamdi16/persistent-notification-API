/**
 * Module dependencies
 */

const { Schema, model } = require("mongoose");

/**
 * Notification Schema
 */

let PaymentRequestNotificationSchema = new Schema({
  statusCode: {
    type: String
  },
  statusMessage: {
    type: String
  },
  notificationId: {
    type: String
  },
  externalReferenceNumber: {
    type: String
  },
  state: {
    type: String
  }

});


model("PaymentRequestNotification", PaymentRequestNotificationSchema);

module.exports = model("PaymentRequestNotification");
