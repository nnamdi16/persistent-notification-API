const NotificationSchema = require("./notification.model");
const {info} = require("heroku-log");

exports.receiveNotification = async function(data) {
  try {
   
    const {
      statusCode,
      statusMessage,
      transactionReference,
      accountNumber,
      accountName,
      amount,
      clearingFeeAmount,
      transferFeeAmount,
      financialIdentificationNumber,
      transferBankName,
      transferBankAccountNumber,
      hash
      
    } = data;

   
    if (accountNumber == '2741938938') {
      return {
        retry:true
      }
    }
    const newNotification = new NotificationSchema({
      statusCode,
      statusMessage,
      transactionReference,
      paymentAccountNumber:accountNumber,
      paymentAccountName:accountName,
      amount,
      clearingFeeAmount,
      bankTransferFeeAmount:transferFeeAmount,
      financialIdentificationNumber,
      transferBankName,
      transferBankAccountNumber,
      hash
    });
    console.log(newNotification);

    await newNotification.save();
    console.log(newNotification);
    return {
      status: false
    };
  } catch (error) {
    throw new Error(error);
  }
};

