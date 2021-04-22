const PaymentRequestNotificationSchema = require("./paymentRequestNotification.model");
const {info} = require("heroku-log");

exports.receiveNotification = async function(data) {
  try {
   
    const {
      statusCode,
      statusMessage,
      notificationId,
      externalReferenceNumber,
      state
      
    } = data;

    
    const newNotification = new PaymentRequestNotificationSchema({
      statusCode,
      statusMessage,
      notificationId,
      externalReferenceNumber,
      state
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

