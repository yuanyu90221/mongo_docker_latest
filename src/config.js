const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    PORT: process.env.PORT,
    USERNAME: process.env.MONGO_INITDB_ROOT_USERNAME,
    PASSWD: process.env.MONGO_INITDB_ROOT_PASSWORD,
    DB_HOST: process.env.MONGO_HOST,
    DB_NAME: process.env.DB_NAME
};