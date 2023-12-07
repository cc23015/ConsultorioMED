// class DAO_clientes{
//   constructor(bd)
//     _bd = bd;
// }
//executando uma consulta

//npm install tedious




const sql = require('mssql');

const config ={
    server:'regulus.cotuca.unicamp.br',
    database:'BD23015',
    user: 'BD23015',
    password: 'BD23015',
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
};

sql.connect(config).then(poll =>{
    console.log("Banco de dados conectado com sucesso!");
    return SecurityPolicyViolationEvent;
}).catch(err =>{
    console.log('Não conectou no banco de dados. Erro: ${err}');
});

module.exports = sql;


// var Connection = require('tedious').Connection;  
//     var config = {  
//         server: 'regulus.cotuca.unicamp.br',  //update me
//         authentication: {
//             type: 'default',
//             options: {
//                 userName: 'BD23015', //update me
//                 password: 'BD23015'  //update me
//             }
//         },
//         options: {
//             // If you are on Microsoft Azure, you need encryption:
//             encrypt: true,
//             database: 'BD23015'  //update me
//         }
//     };  
//     var connection = new Connection(config);  
//     connection.on('connect', function(err) {  
//         // If no error, then good to proceed.
//         console.log("BANCO DE DADOS CONECTADO!");  
//     });
    
//     connection.connect();












// var Request = require('tedious').Request;  
// var TYPES = require('tedious').TYPES;  

// function executeStatement() {  
//     var request = new Request("SELECT M.paciente, M.consulta, M.medico, M.diaConsulta, M.horario, FROM M.consultas AS M ", function(err) {  
//     if (err) {  
//         console.log(err);}  
//     });  
//     var result = "";  
//     request.on('row', function(columns) {  
//         columns.forEach(function(column) {  
//           if (column.value === null) {  
//             console.log('NULL');  
//           } else {  
//             result+= column.value + " ";  
//           }  
//         });  
//         console.log(result);  
//         result ="";  
//     });  

//     request.on('done', function(rowCount, more) {  
//     console.log(rowCount + ' rows returned');  
//     });  
// }  


// //INSERIR UMA LINHA

// function executeStatement1() {  
//   var request = new Request("INSERT M.consultas (paciente, consulta, medico, diaConsulta, horario)", function(err) {  
//    if (err) {  
//       console.log(err);}  
//   });  
//   request.addParameter('Name', TYPES.NVarChar,'SQL Server Express 2014');  
//   request.addParameter('Number', TYPES.NVarChar , 'SQLEXPRESS2014');  
//   request.addParameter('Cost', TYPES.Int, 11);  
//   request.addParameter('Price', TYPES.Int,11);  
//   request.on('row', function(columns) {  
//       columns.forEach(function(column) {  
//         if (column.value === null) {  
//           console.log('NULL');  
//         } else {  
//           console.log("Product id of inserted item is " + column.value);  
//         }  
//       });  
//   });

//   // Close the connection after the final event emitted by the request, after the callback passes
//   request.on("requestCompleted", function (rowCount, more) {
//       connection.close();
//   });
//   connection.execSql(request);  
// }  