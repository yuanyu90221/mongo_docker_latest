const mongoose = require('mongoose');
const config = require('./config');
const connectString = `mongodb://${config.USERNAME}:${config.PASSWD}@${config.DB_HOST}:${config.PORT}/${config.DB_NAME}`;
const DBManager = {
    getConnection: () => {
        return mongoose.createConnection(`${connectString}`, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
    }
};

module.exports = DBManager;
