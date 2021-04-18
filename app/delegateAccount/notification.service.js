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
      bankTransferFeeAmount,
      financialIdentificationNumber,
      transferBankName,
      transferBankAccountNumber,
      hash
      
    } = data;

    
    const newNotification = new NotificationSchema({
      statusCode,
      statusMessage,
      paymentAccountNumber,
      paymentAccountName,
      amount,
      clearingFeeAmount,
      bankTransferFeeAmount,
      financialIdentificationNumber,
      transferBankName,
      transferBankAccountNumber,
      hash
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

