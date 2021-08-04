/* eslint-disable prettier/prettier */
/**
 * Module dependencies
 */

const { Schema, model } = require("mongoose");

/**
 * Notification Schema
 */

let NotificationSchema = new Schema({
    statusCode: {
        type: String,
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
    fundingPaymentReference: {
        type: String
    },

    state: {
        type: String,
        enum: ['PENDING', 'CHARGEABLE', 'CONSUMED', 'EXPIRED', 'FAILED', 'CANCELLED']
    },

    outStandingBalance: {
        type: Number
    },
    note: {
        type: String
    },
    hash: {
        type: String
    }

}, { timestamps: true });


model("Notification", NotificationSchema);

module.exports = model("Notification");