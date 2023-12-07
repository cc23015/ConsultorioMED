// const { application } = require("express");
// const app = require("../../config/express");

module.exports = (app)=>{
    app.use((req, res, next)=>{
        res.header("Access-Control-Allow-Origin", "*");
        next();
    })
    
    const pacientesController = require("../controllers/CON_pacientes");
    const pacController = new pacientesController();
    
    //criando as rotas
    
    app.get("/home", (req, res)=>{
        console.log("Utilizando rota /home");
        res.send(" ");
    });
    
    app.get('/listaPacientesEJS', pacController.exibeDados)
};