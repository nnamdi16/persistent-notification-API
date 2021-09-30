/* eslint-disable prettier/prettier */
/**
 * Module dependencies
 */

const { Schema, model } = require("mongoose");

/**
 * Notification Schema
 */

let CheckoutNotificationSchema = new Schema({
    statusCode: {
        type: String,
    },
    statusMessage: {
        type: String
    },
    paymentReference: {
        type: String
    },
    amount: {
        type: String
    },
    currency: {
        type: String
    },

    timestamp: {
        type: String
    },
    errorCategory: {
        type: String,
        enum: ['RISK_ERROR', 'SYSTEM_ERROR', 'USER_ERROR']
    }

}, { timestamps: true });


model("CheckoutNotification", CheckoutNotificationSchema);

module.exports = model("CheckoutNotification");