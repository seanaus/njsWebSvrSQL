"use strict";
const mssqlEnum = require('../enums/mssqlEnum');

const PORT = 8080;
const HOST = "localhost";
const URL = `http://${HOST}:${PORT}`;
const PRODUCTION =  false;
const MSSQL_VERSION = '10.50.1600.1';

let SQL_SERVER_CONFIG = {
    user: "sa",
    password: "Aus25031549",
    server: "MazLPT01\\MSSqlSvr2019",
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

let SQL_SERVER_CONFIG_LEGACY = {
    driver: "msnodesqlv8",
    server: 'SAMH01\\SQLEXPRESS2008R2',
    database: 'RL',
    encrypt: false,
    port: 1433,
    options: {
      trustedConnection: true            
    }
  }

const setDatabase = (value) => {
    switch(MSSQL_VERSION) {
        case mssqlEnum.VERSION.v2000,
            mssqlEnum.VERSION.v2005,
            mssqlEnum.VERSION.v2008,
            mssqlEnum.VERSION.v2008R2:
            return SQL_SERVER_CONFIG_LEGACY['database'] = value
        default:
        return SQL_SERVER_CONFIG['database'] = value
    }
}

const sqlServerConfig = ()=> {
    switch(MSSQL_VERSION) {
        case mssqlEnum.VERSION.v2000,
            mssqlEnum.VERSION.v2005,
            mssqlEnum.VERSION.v2008,
            mssqlEnum.VERSION.v2008R2:
            return SQL_SERVER_CONFIG_LEGACY
        default:
        return SQL_SERVER_CONFIG
    }
}

module.exports = {
    port: PORT,
    host: HOST,
    url: URL,
    sqlServerConfig: SQL_SERVER_CONFIG,
    production: PRODUCTION,
    mssqlVersion: MSSQL_VERSION,
    setDatabase
}