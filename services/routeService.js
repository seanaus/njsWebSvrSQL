"use strict";
const sqlService = require('./msqlService');
const errLogService = require('./errorLogService');
const configService = require('./configService');
// const sql = require('mssql');
const getData = async(req)=> {

  const qryParamDb = req.query.database
  const qryParamQuery = req.query.query

  if(qryParamDb && qryParamDb !== null && qryParamDb !=="") {
    configService.setDatabase(qryParamDb);
  }

  if(qryParamQuery && qryParamQuery !== null && qryParamQuery !=="") {

    const con = sqlService.connect()
    const db = await con.connect();

    if(db !== null) {
      return await sqlService.open(db, qryParamQuery);
      // return data
    } else {
      errLogService.log("Cannot Connect To Database");
      return {}
    }

  } else {
    errLogService.log("No SQL Supplied For Query Parameter");
    return {}
  }

}


























// const getData_ActuallyWORKSMINT = async(req)=> {
//   let data = {};
//   const db = await connect(sql,config);
  
//   if(con !== null) {
//     const db = await con.connect();
//     data = (await db.query("SELECT * FROM nuwa_queue")).recordset;
//     console.log(data);
//     sql.close();
//   }
  
//   return data;
// }
// const connect = (mssql, config)=> {
//   try{
//     return new mssql.ConnectionPool(config)
//   } catch(err) {
//     return null
//   }

// }


// const connectionPool = (mssql, config)=> {
//   try{
//     return new mssql.ConnectionPool(config)
//   } catch(err) {
//     return null
//   }

// }


// const getData_WORKS = async()=> {
// var sql = require("mssql");
// var config = {
//   user: "sa",
//   password: "Aus25031549",
//   server: "SAMH01",
//   database: "RL",
//   port: 1433,
//   options: {
//     encrypt: false,
//     useUTC: true,
//   },

//   pool: {
//     max: 100,
//     min: 0,
//     idleTimeoutMillis: 3600000,
//   },
// };
// var pool = new sql.ConnectionPool(config);
// let data = {};

// const db = await pool.connect()


//   data = (await db.query("SELECT * FROM nuwa_queue")).recordset;
//   console.log(data);
//   sql.close();
//   return data;

  // database.close();
  // sql.close();
 // return data;

// }


// const getDataOLD = ()=> {
//   var Connection = require('tedious').Connection;  
//     var config = {  
//         server: 'SAMH01',  //update me
//         authentication: {
//             type: 'default',
//             options: {
//                 userName: 'sa', //update me
//                 password: 'Aus25031549'  //update me
//             }
//         },
//         options: {
//             // If you are on Microsoft Azure, you need encryption:
//             encrypt: true,
//             database: 'your_database'  //update me
//         }
//     }; 
//     var connection = new Connection(config);  
//     connection.on('connect', function(err) {  
//       if(err) {
//         console.log(err.message);
//       } else {
//         // If no error, then good to proceed.  
//         console.log("Connected");  
//         executeStatement();
//       }
//     });  
    
//     connection.connect();
  
//     var Request = require('tedious').Request;  
//     var TYPES = require('tedious').TYPES;  
  
//     function executeStatement() {  
//         var request = new Request("SELECT * FROM nuwa_queue WHERE Id = 1;", function(err) {  
//         if (err) {  
//             console.log(err);}  
//         });  
//         var result = "";  
//         request.on('row', function(columns) {  
//             columns.forEach(function(column) {  
//               if (column.value === null) {  
//                 console.log('NULL');  
//               } else {  
//                 result+= column.value + " ";  
//               }  
//             });  
//             console.log(result);  
//             result ="";  
//         });  
  
//         request.on('done', function(rowCount, more) {  
//         console.log(rowCount + ' rows returned');  
//         });  
        
//         // Close the connection after the final event emitted by the request, after the callback passes
//         request.on("requestCompleted", function (rowCount, more) {
//             connection.close();
//         });
//         connection.execSql(request);  
//     }  
// }

// const sql = require('mssql');
// var config = {
//   user: "sa",
//   password: "Aus25031549",
//   server: "SAMH01",
//   database: "RL",
//   port: 1433,
//   options: {
//     encrypt: false,
//     useUTC: true,
//   },

//   pool: {
//     max: 100,
//     min: 0,
//     idleTimeoutMillis: 3600000
//   },
// };
// const Connection = require('tedious').Connection;  
// const Request = require('tedious').Request;  
// const TYPES = require('tedious').TYPES; 

// const config = {  
//   server: 'SAMH01',  //update me
//   authentication: {
//       type: 'default',
//       options: {
//           userName: 'sa', //update me
//           password: 'Aus25031549'  //update me
//       }
//   },
//   options: {
//       // If you are on Microsoft Azure, you need encryption:
//       encrypt: true,
//       database: 'RL'  //update me
//   }
// };  

// const config = {
//     user: 'sa',
//     password: 'Aus25031549',
//     database: 'RL',
//     server: 'SAMH01',
//     pool: {
//       max: 10,
//       min: 0,
//       idleTimeoutMillis: 30000
//     },
//     options: {
//       encrypt: true, // for azure
//       trustServerCertificate: false // change to true for local dev / self-signed certs
//     }
//   }

// config for your database
// let config = {
//     //     server: '172.16.20.22',
//     server: 'SAMH01',
//     database: 'RL',
//     user: 'sa',
//     password: 'Aus25031549',
//     query: ''
// };

// const getData = (req) => {

//     config.server = req.query.server;
//     config.database = req.query.database;
//     config.query = req.query.query;

//     sql.connect(config, (err) => {

//         if (err) console.log(err);
//         const request = new sql.Request();

//         request.query(config.query, (err, recordset) => {

//             if (err) console.log(err)
//             return recordset

//         });
//     });
// }
// const getData = async (req) => {

//     // config.server = req.query.server;
//     // config.database = req.query.database;
//     // config.query = req.query.query;
//     // config.query = "SELECT * FROM nuwa_queue";

//     try {
//         const con = await sql.connect(config);
//         // const result = await sql.query`SELECT * FROM nuwa_queue WHERE Id = 1`
//          
//         await sql.close();
//         return result.recordset
//     } catch(error) {
//         await sql.close();
//         console.log(error.message);
//         return {error:'ERROR'}
//     }
// }

// const getData = async(req)=> {

//       // config for your database
//     const config = {
//         user: 'sa',
//         password: 'Aus25031549',
//         server: 'SAMH01', 
//         database: 'RL' 
//     };

//     let data = {};
    
    // connect to your database
    // await sql.connect(config, (err)=> {
    
    //     if (err) console.log(err);

        // create Request object
        // const request = new sql.Request();
           
        // query to the database and get the records
        // data = request.query('select * from nuwa_queue', (err, recordset)=> {
            
        //     if (err) console.log(err)

        //     // send records as a response
        //     return recordset
            
        // });
//     });

//     return data

// }

// const getData = async () => {
//   try {
//       // make sure that any items are correctly URL encoded in the connection string
//       console.log("1");
//       const pool=await sql.connect('Server=SAMH01,1433;Database=RL;User Id=sa;Password=Aus25031549;Encrypt=true')
//       console.log("2");
//       const result = await pool.query`select * from nuw_queue where id = 1`
//       console.log("3");
//       console.log(JSON.stringify(result));
//   } catch (err) {
//       // ... error checks
//       if (err) console.log(`ERROR: ${err}`);
//   }
// }

// const getData = async()=> {
//   const pool = await getConnection();
//   console.log("DONE!");

// }
// // returns a promise which resolves to the current global connection pool
// const getConnection = ()=> {   
//   return sql.connect(config);
// }

// const getData = async(req)=> {

//   const connection = new Connection(config);  
//   connection.on('connect', err=> {  
//       // If no error, then good to proceed.
//       console.log("Connected");  
//   });
  
//   connection.connect();
//   executeStatement();
// }

// const executeStatement = (connection)=> {  

//   const request = new Request("SELECT * FROM nuwa_queue WHERE Id = 1;", err => {  
//     if (err) console.log(err);
//   }); 

//   const result = "";  
//   request.on('row', columns => {  
//       columns.forEach(column => {  
//         if (column.value === null) {  
//           console.log('NULL');  
//         } else {  
//           result+= column.value + " ";  
//         }  
//       });  
//       console.log(result);  
//       result ="";  
//   });  

//   request.on('done', (rowCount, more) => {  
//     console.log(rowCount + ' rows returned');  
//   });  
  
//   // Close the connection after the final event emitted by the request, after the callback passes
//   request.on("requestCompleted", (rowCount, more) => {
//       connection.close();
//   });

//   connection.execSql(request);  

// }  

module.exports = {
    getData
}