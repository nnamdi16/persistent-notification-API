const NotificationSchema = require("./notification.model");
const {info} = require("heroku-log");

exports.receiveNotification = async function(data) {
  try {
   
    const {
      statusCode,
      statusMessage,
      paymentAccountNumber,
      paymentAccountName,
      amount,
      clearingFeeAmount,
      bankTransferFeeAmount
    } = data;

    
    const newNotification = new NotificationSchema({
      statusCode,
      statusMessage,
      paymentAccountNumber,
      paymentAccountName,
      amount,
      clearingFeeAmount,
      bankTransferFeeAmount
    });
    console.log(newNotification);

    await newNotification.save();
    return {
      status: false
    };
  } catch (error) {
    throw new Error(error);
  }
};

