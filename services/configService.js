"use strict";
const PORT = 8080;
const HOST = "localhost";
const URL = `http://${HOST}:${PORT}`;
const PRODUCTION =  false;
let SQL_SERVER_CONFIG = {
    user: "sa",
    password: "Aus25031549",
    server: "SAMH01",
    database: "RL",
    port: 1433,
    options: {
        encrypt: false,
        useUTC: true,
    },
    pool: {
        max: 100,
        min: 0,
        idleTimeoutMillis: 3600000
    }
};

const setDatabase = (value) => {
    SQL_SERVER_CONFIG['database'] = value
}

module.exports = {
    port: PORT,
    host: HOST,
    url: URL,
    sqlServerConfig: SQL_SERVER_CONFIG,
    production: PRODUCTION,
    setDatabase
}