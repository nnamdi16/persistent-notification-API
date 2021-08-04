/* eslint-disable prettier/prettier */
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
    trnasctionReference: {
        type: String
    },
    statusCode: {
        type: String
    },
    statusMessage: {
        type: String
    },
    fundingPaymentReference: {
        type: String,
        default: null
    },
    accountNumber: {
        type: String
    },
    accountName: {
        type: String
    },
    amount: {
        type: Number
    },
    financialIdentificationNumber: {
        type: String
    },
    clearingFeeAmount: {
        type: Number
    },
    transferFeeAmount: {
        type: Number
    },
    transferBankName: {
        type: String
    },
    transferBankAccountNumber: {
        type: String
    },
    hash: {
        type: String
    }

}, {
    timestamps: true
});


model("PaymentRequestNotification", PaymentRequestNotificationSchema);

module.exports = model("PaymentRequestNotification");