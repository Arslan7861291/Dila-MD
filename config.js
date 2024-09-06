const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "0iV3RRya#vkJ_gK39Z9Qj_lS6iU1qbhL1VL19kLfal_lU6qpxjj0",
MONGODB: process.env.MONGODB || "mongodb://mongo:tcHppvmtGjEehXxhHhRLiNLDixCjRPxT@junction.proxy.rlwy.net:50567",
};
