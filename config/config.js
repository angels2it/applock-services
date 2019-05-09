require('dotenv').config();//instatiate environment variables

let CONFIG = {} //Make this global to use all over the application
console.log(process.env.APP)

CONFIG.app          = process.env.APP   || 'dev';
CONFIG.port         = process.env.PORT  || '3000';

CONFIG.db_dialect   = process.env.DB_DIALECT    || 'mysql';
CONFIG.db_host      = process.env.DB_HOST       || 'applock.ezs.network';
CONFIG.db_port      = process.env.DB_PORT       || '3306';
CONFIG.db_name      = process.env.DB_NAME       || 'applock-dev';
CONFIG.db_user      = process.env.DB_USER       || 'carta';
CONFIG.db_password  = process.env.DB_PASSWORD   || 'Test!234';

CONFIG.jwt_encryption  = process.env.JWT_ENCRYPTION || 'jwt_please_change';
CONFIG.jwt_expiration  = process.env.JWT_EXPIRATION || '10000';

module.exports = CONFIG;
