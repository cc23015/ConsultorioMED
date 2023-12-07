var http = require('http');
var fs = require('fs');
const express = require('express');
const { response } = require('express');
//const session = require('express.session');
const bodyParser = require('body-parser')

const porta = 3000;
var path = require('path');
const app = express();

//O QUE É UM APP POST?????


app.use(bodyParser.urlencoded({extended:true}));



//configura o mecanismo de visualização para usar ejs(páginas)
app.set('view engine', 'ejs');

//configura o servidor express para servir aequivos estáticos do diretório 'public'
app.use(express.static('node'));



//redireciona a partir do link
//var link = req.url;




//define uma rota '/login' que renderiza a página 'login'
app.get('/login', (req, res)=> {
    res.render(__dirname+ "/node/module/views/login.ejs");
    //tentando conectar com o bd
    //if(req.body.password = senha && req.body.login==login){

    //}
});

app.get('/Entrada', (req, res)=> {
    res.render(__dirname+ "/node/module/views/Entrada.ejs");
    // if(se botão medicos for pressionado...)
        if(link =="/medicos"){
            res.render(__dirname+ "/node/module/views/medicos.ejs");
        }
        if(link =="/login"){
            res.render(__dirname+ "/node/module/views/login.ejs");
        };
});

app.get('/consulta', (req, res)=> {
    res.render(__dirname+ '/node/module/views/consulta.ejs');
    
    if(link =="/medicos"){
        res.render(__dirname+ '/node/module/views/medicos.ejs');
    }
    if(link =="/login"){
        res.render(__dirname+ '/node/module/views/login.ejs');
    };
});

app.get('/medicos', (req, res)=> {
    res.render(__dirname+ '/node/module/views/medicos.ejs');
    
    if(link =="/login"){
        res.render(__dirname+ '/node/module/views/login.ejs');
    }
    if(link =="/login"){
        res.render(__dirname+ '/node/module/views/login.ejs');
    };
});

app.listen(3000, function(){
    console.log("Servidor na porta 3000");
});
