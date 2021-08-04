/* eslint-disable prettier/prettier */
const PaymentRequestNotificationSchema = require("./paymentRequestNotification.model");
const { info } = require("heroku-log");

exports.receiveNotification = async function(data) {
    try {
        console.log(data);
        const {
            transactionReference,
            statusCode,
            statusMessage,
            fundingPaymentReference,
            accountNumber,
            accountName,
            amount,
            financialIdentificationNumber,
            clearingFeeAmount,
            transferFeeAmount,
            transferBankName,
            transferBankAccountNumber,
            hash

        } = data;


        const newNotification = new PaymentRequestNotificationSchema({
            transactionReference,
            statusCode,
            statusMessage,
            fundingPaymentReference,
            accountNumber,
            accountName,
            amount,
            financialIdentificationNumber,
            clearingFeeAmount,
            transferFeeAmount,
            transferBankName,
            transferBankAccountNumber,
            hash

        });
        console.log(newNotification);

        await newNotification.save();
        return {
            status: true
        };
    } catch (error) {
        throw new Error(error);
    }
};