"use strict";
const configService = require('./configService');
const errLogService = require('./errorLogService');
switch(configService.mssqlVersion) {
    case mssqlEnum.VERSION.v2000,
        mssqlEnum.VERSION.v2005,
        mssqlEnum.VERSION.v2008,
        mssqlEnum.VERSION.v2008R2:
        const sql = require('mssql/msnodesqlv8');
    default:
        const sql = require('mssql');
}
const connect = (option)=> {
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