var Request = require('tedious').Request;  
var TYPES = require('tedious').TYPES;  

function executeStatement(){  
    var request = new Request("SELECT M.paciente, M.consulta, M.medico, M.diaConsulta, M.horario, FROM M.consultas AS M ", function(err) {  
    if (err) {  
        console.log(err);}  
    });  
    var result = "";  
    request.on('row', function(columns) {  
        columns.forEach(function(column) {  
          if (column.value === null) {  
            console.log('NULL');  
          } else {  
            result+= column.value + " ";  
          }  
        });  
        console.log(result);  
        result ="";  
    });  

    request.on('done', function(rowCount, more) {  
    console.log(rowCount + ' rows returned');  
    }); 
};


function executeStatement1() {  
    var request = new Request("INSERT M.consultas (paciente, consulta, medico, diaConsulta, horario)", function(err) {  
        if (err) {  
        console.log(err);}  
    });  
    request.addParameter('Name', TYPES.NVarChar,'SQL Server Express 2014');  
    request.addParameter('Number', TYPES.NVarChar , 'SQLEXPRESS2014');  
    request.addParameter('Cost', TYPES.Int, 11);  
    request.addParameter('Price', TYPES.Int,11);  
    request.on('row', function(columns) {  
        columns.forEach(function(column) {  
            if (column.value === null) {  
            console.log('NULL');  
            } else {  
            console.log("Product id of inserted item is " + column.value);  
            }  
        });  
    });
    
    // Close the connection after the final event emitted by the request, after the callback passes
    request.on("requestCompleted", function (rowCount, more) {
        connection.close();
    });
    connection.execSql(request);  
};  
      