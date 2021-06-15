const PaymentRequestNotificationSchema = require("./paymentRequestNotification.model");
const {info} = require("heroku-log");

exports.receiveNotification = async function(data) {
  try {
   console.log(data);
    const {
      referenceNumber,
      statusCode,
      statusMessage,
      paymentMethods,
      expiryDateTimeUTC,
      payerPagaAccountHolder
      
    } = data;

    
    const newNotification = new PaymentRequestNotificationSchema({
      referenceNumber,
      statusCode,
      statusMessage,
      paymentMethods,
      expiryDateTimeUTC,
      payerPagaAccountHolder
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


