/* eslint-disable prettier/prettier */
const {
    receiveNotification
} = require("./notification.service");
const { authenticate } = require('../customer/customer.service');

const { info } = require("heroku-log");
exports.receiveNotification = async(req, res) => {
    try {
        res.set("Content-Type", "application/json");
        res.set("Accept", "application/json");
        const value = req.body;
        console.log(value);
        const data = await receiveNotification(value);
        info(data);
        console.log(data);
        if (data.error) {
            return res.status(302).json({
                status: 0,
                message: data.msg
            });
        }
        // if (data.retry) {
        //   return res.status(444);
        // }

        //or writeHead method
        return res
            .status(201)
            // .header("Authorization", token)
            .send({
                status: 'SUCCESS'
            });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


exports.basicAuth = async function(req, res, next) {
    //Check for the basic auth header

    console.log(req.headers);
    if (!req.headers.authorization ||
        req.headers.authorization.indexOf("Basic") === -1
    ) {
        return res.status(401).json({
            message: "Missing Authorization Header"
        });
    }

    //Verify auth credentials
    const base64Credentials = req.headers.authorization.split(" ")[1];
    const credentials = Buffer.from(base64Credentials, "base64").toString(
        "ascii"
    );

    const [username, password] = credentials.split(":");
    // console.log(username,password)

    const customer = await authenticate(username, password);
    console.log(customer.error);
    if (customer.error) {
        return res.status(401).json({
            error: true,
            message: "Invalid Authentication Credentials"
        });
    }
    //Attach customer to the request object
    // req.customer = customer;
    next();
};