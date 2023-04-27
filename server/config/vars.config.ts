// This file allows for the secure movement of sensitive information by assigning them to variables.
// **Not persisting through imports so it is not implemented right now**
export const DATA_SOURCE = {
    mySqlDataSource: {
        DB_HOST: process.env.MY_SQL_DB_HOST,
        DB_USER: process.env.MY_SQL_DB_USER,
        DB_PASSWORD: process.env.MY_SQL_DB_PASSWORD,
        DB_PORT: process.env.MY_SQL_DB_PORT,
        DB_DATABASE: process.env.MY_SQL_DB_DATABASE,
        DB_CONNECTION_LIMIT: process.env.MY_SQL_DB_CONNECTION_LIMIT ? parseInt(process.env.MY_SQL_DB_CONNECTION_LIMIT) : 20
    }
}