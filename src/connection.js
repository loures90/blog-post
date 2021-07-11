import knex from "knex";
import dotenv from "dotenv";

dotenv.config();

const connection = knex({
    client:"mysql",
    connection:{
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_SCHEMA,
        multipleStatements: true
    },
    migrations:{
        directory:'./src/data/migrations',
        path:"./src/data/migrations"
    }
})
export default connection;