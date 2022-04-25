const mongoose = require('mongoose'); 

function connected() {
    if (mongoose.connection.readyState == 1) {
        return 1;
    } else {
        return 0;
    }
};

module.exports = { connected };