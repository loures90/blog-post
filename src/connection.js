import dotenv from 'dotenv';
import knex from 'knex';

dotenv.config()
const connection = knex({
    client:'mysql',
    connection:{
        host: process.env.DB_HOST,
        user:process.env.USER,
        password:process.env.PASSWORD,
        database:process.env.DB,
    }
})
export default connection;