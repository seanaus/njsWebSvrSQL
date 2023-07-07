"use strict";
const sql = require('mssql');
const configService = require('./configService');
const errLogService = require('./errorLogService');

// const connect = ()=> {

//     try{
//         const pool = connectionPool()
//         if(pool !== null) {

//         } else {
//             return null
//         }
//     } catch(err) {
//         errLogService.logError(err);
//         return null
//     }

// };

const connect = ()=> {
    try{
        return new sql.ConnectionPool(configService.sqlServerConfig);
    } catch(err) {
        errLogService.logError(err);
        return null
    }
};
// const openDB = async(con)=> {
//     try{
//         const db = await con.connect()
//         return db;
//     } catch(err) {
//         errLogService.logError(err);
//         return null
//     }
// };
const open = async(db, sql)=> {
    try {
        return (await db.query(sql)).recordset;
    } catch (err) {
        errLogService.logError(err);
        return false
    }
}

module.exports = {
    connect,
    open
}