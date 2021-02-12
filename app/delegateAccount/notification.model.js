/**
 * Module dependencies
 */

const { Schema, model } = require("mongoose");

/**
 * Notification Schema
 */

let NotificationSchema = new Schema({
  statusCode: {
    type: String
  },
  statusMessage: {
    type: String
  },
  paymentAccountNumber: {
    type: String
  },
  paymentAccountName: {
    type: String
  },
  amount: {
    type: String
  },
  
  clearingFeeAmount: {
    type: String
  },

  bankTransferFeeAmount: {
    type: String
  },

});


model("Notification", NotificationSchema);

module.exports = model("Notification");
