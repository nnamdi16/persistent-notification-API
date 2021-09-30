/* eslint-disable prettier/prettier */
const CheckoutNotificationSchema = require("./notification.model");
const { info } = require("heroku-log");

exports.receiveNotification = async function(data) {
    try {
        const {
            statusCode,
            statusMessage,
            paymentReference,
            amount,
            currency,
            timestamp,
            errorCategory,


        } = data;

        // if (accountNumber == "2741938938") {
        //     return {
        //         retry: true
        //     };
        // }
        const newNotification = new CheckoutNotificationSchema({
            statusCode,
            statusMessage,
            paymentReference,
            amount,
            currency,
            timestamp,
            errorCategory,
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