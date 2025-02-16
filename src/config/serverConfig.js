const dotenv = require('dotenv')
const path = require('path');   


dotenv.config({ path: path.resolve(__dirname, '../../.env') });

dotenv.config();

console.log(`Loaded SYNC_DB from .env: ${process.env.SYNC_DB}`);


module.exports = {
    PORT : process.env.PORT,
    SYNC_DB: process.env.SYNC_DB
}