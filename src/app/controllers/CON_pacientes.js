const bd = require("../../config/database");
const pacientesDAO = require("../BD/DAO_Pacientes.js");

class CON_pacientes 
{
  exibeDadosPacientesEJS() 
  {
    return function(req,res) {
        const pacDAO = new pacientesDAO(bd);
        pacDAO.dadosDosPacientesEJS()
          .then((resultados) => {
             console.log(resultados);
             res.render('../views/login', { pacientes: resultados});
          })
          .catch(erro => console.log(erro));
    }
  }

} // end da classe

module.exports = CON_pacientes;