/* eslint-disable prettier/prettier */
const NotificationSchema = require("./notification.model");
const { info } = require("heroku-log");

exports.receiveNotification = async function(data) {
    try {
        const {
            statusCode,
            statusMessage,
            notificationId,
            externalReferenceNumber,
            fundingPaymentReference,
            state,
            outStandingBalance,
            note,
            hash,

        } = data;

        // if (accountNumber == "2741938938") {
        //     return {
        //         retry: true
        //     };
        // }
        const newNotification = new NotificationSchema({
            statusCode,
            statusMessage,
            notificationId,
            externalReferenceNumber,
            fundingPaymentReference,
            state,
            outStandingBalance,
            note,
            hash,
        });
        console.log(newNotification);

        await newNotification.save();
        console.log(newNotification);
        return {
            status: true
        };
    } catch (error) {
        throw new Error(error);
    }
};