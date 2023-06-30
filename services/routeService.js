"use strict";
const sql = require('mssql');
// config for your database
let config = {
    //     server: '172.16.20.22',
    server: '88.215.47.7',
    database: 'Nuwa.Live.RestaurantLive',
    user: 'webSvr',
    password: 'Aus25031549!',
    query: ''
};

const getData = (req) => {

    config.server = req.query.server;
    config.database = req.query.database;
    config.query = req.query.query;

    sql.connect(config, (err) => {

        if (err) console.log(err);
        const request = new sql.Request();

        request.query(config.query, (err, recordset) => {

            if (err) console.log(err)
            return recordset

        });
    });
}

module.exports = {
    getData
}