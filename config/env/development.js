/**
 * Expose
 */

const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  MONGODB_URL: process.env.MONGODB_URL,
  PORT: process.env.PORT || "5000"
  // MONGODB: process.env.MONGODB
};
// "mongodb://localhost:27017/merchant-notification-app"
