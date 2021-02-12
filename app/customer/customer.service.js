const CustomerSchema = require("./customer.model");
const {info} = require("heroku-log");

exports.registerCustomer = async function(data) {
  try {
   
    const {
      customerFirstName,
      customerLastName,
      customerPhoneNumber,
      customerAccountStatus,
      password,
      secretKey,
      email
    } = data;
    const newCustomer = new CustomerSchema({
      customerFirstName,
      customerLastName,
      customerPhoneNumber,
      customerAccountStatus,
      email
    });
    const validCustomer = await CustomerSchema.exists({ customerPhoneNumber });
    if (validCustomer) {
      return {
        error: true,
        msg: "Customer already exist"
      };
    }

    newCustomer.setPassword(password);
    newCustomer.setRoles(secretKey);
    newCustomer.generateAuthToken();
    newCustomer.setcustomerAccountNumber();
    await newCustomer.save();
    return {
      error: false,
      message: `${customerFirstName} successfully created`,
      user: newCustomer.toAuthJSON()
    };
  } catch (error) {
    throw new Error(error);
  }
};

exports.validateCustomer = async function(data) {
  try {
    info(`Customer Service Line 49: ${data}`);
    const { customerAccountNumber, subsidiaryAccountNumber} = data;
    console.log(subsidiaryAccountNumber);
    if (subsidiaryAccountNumber) {
      const subsidiaryAccountDetails = await CustomerSchema.findOne({
        customerAccountNumber: subsidiaryAccountNumber
      });
      info(`Customer service Line 55: ${subsidiaryAccountDetails}`);
     const {role} = subsidiaryAccountDetails;
      if (subsidiaryAccountDetails &&  role == "AFFILIATE" ) {
        return {
          status:"SUCCESS",
          message:"Notification received and processed successfully"
        }
      }
    }
    const customerInfo = await CustomerSchema.findOne({
      customerAccountNumber
    });

    if (!customerInfo) {
      return {
        error: true,
        msg: `Subsidiary details does not exist `
      };
    }
    const {
      customerFirstName: firstName,
      customerLastName: lastName,
      customerAccountStatus
    } = customerInfo;

    const today = new Date(Date.now());

    let lastPaymentDate = today.toISOString();

    return {
      status: "SUCCESS",
      message: "Notification processed successfully",
      isValid: true,
      firstName,
      lastName,
      lastPaymentDate,
      accountStatus: customerAccountStatus,
      paymentDueDate: lastPaymentDate,
      isDisplayed: true
    };
  } catch (error) {
    throw new Error(error);
  }
};

exports.authenticate = async function(username, password) {
  try {
    // console.log(username);
    // const result = await CustomerSchema.find({});
    // console.log(result);
    const customerInfo = await CustomerSchema.findOne({
      email: username
    });
    // console.log("STTTTTTOOOOOOOP")
    console.log(customerInfo);
    if (!customerInfo) {
      return {
        error: true,
        message: `User not authorized`
      };
    }
    const { role, salt, password: hashedPassword } = customerInfo;
    const checkPassword = customerInfo.comparePassword(
      password,
      salt,
      hashedPassword
    );
    const checker = customerInfo && role === "Admin" && checkPassword;
    // console.log("We are here");
    console.log(checker);
    if (!checker) {
      return {
        error: true
      };
    }
    return {
      error: false
    };
  } catch (error) {
    return {
      error: true,
      message: error.message
    };
  }
};
