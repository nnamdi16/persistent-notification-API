/**
 * Module dependencies
 */

const {
  Schema,
  model
} = require("mongoose");

/**
 * Notification Schema
 */

let PaymentRequestNotificationSchema = new Schema({
  referenceNumber: {
    type: String
  },
  statusCode: {
    type: String
  },
  statusMessage: {
    type: String
  },

  paymentMethods: {
    type: Array
  },
  
  expiryDateTimeUTC: {
    type: String,
    default:null
  },
  payerPagaAccountHolder: {
    type: Boolean
  }

}, {
  timestamps: true
});


model("PaymentRequestNotification", PaymentRequestNotificationSchema);

module.exports = model("PaymentRequestNotification");