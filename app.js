const express = require('express');
const app = express();
const port = 3000;
const mysql = require('mysql2');
const editarRouter = require('./editarRouter');

app.listen(port, () => {
  console.log(`Servidor rodando em ${port}`);
});

const db = mysql.createConnection({
  host: 'regulus.cotuca.unicamp.br',
  user: 'BD23015',
  password: 'BD23015',
  database: 'BD23015',
});

db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  } else {
    console.log('Conectado ao banco de dados');
  }
});

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.get('/cadastro', (req, res) => {
  res.render (__dirname+"/views/cadastro.ejs");
});

app.get('/', (req, res) => {
  const query = 'SELECT * FROM view_medicos';

  db.query(query, (err, result) => {
    if (err) {
      console.error('Erro ao obter médicos:', err);
      res.send('Erro ao obter médicos');
    } else {
      res.render('index', { Medico: result });
    }
  });
});

app.use('/editar', editarRouter);

app.get('/cadastrar', (req, res) => {
  const query = 'CALL inserirMedico(nomeMedico_V, sobrenomeMed_V, especialidade_V, emailMed_V,senhaMed_V';

  db.query(query, [], (err, result) => {
    if (err) {
      console.error('Erro ao cadastrar médico:', err);
      res.send('Erro ao cadastrar médico');
    } else {
      const medicoCadastrado = result[0][0];
      res.render('cadastrar', { medico: medicoCadastrado });
    }
  });
});


app.get('/editar/:id', (req, res) => {
  const idMedico = req.params.id;

  const query = 'SELECT * FROM Medico WHERE idMedico = ?';
  
    db.query(query, [idMedico], (err, result) => {
      if (err) {
        console.error('Erro ao obter detalhes do médico:', err);
        res.send('Erro ao obter detalhes do médico');
      } else {
        res.render('editar', { medico: result[0] });
      }
    });
  });
  

  app.get('/excluir/:id', (req, res) => {
    const medicoId = req.params.id;
  
    const query = 'CALL ExcluirMedicoPorId(?)';
  
    db.query(query, [medicoId], (err, result) => {
      if (err) {
        console.error('Erro ao excluir médico:', err);
        res.send('Erro ao excluir médico');
      } else {
        res.redirect('/');
      }
    });
  });
  

  /*app.post('/editar/:id', (req, res) => {
    const idMedico = req.params.id;
    const { nomeMedico, sobrenomeMed, especialidade, emailMed, senhaMed} = req.body;

    const query = 'UPDATE Medico SET nomeMedico = ?, sobrenomeMed = ?, especialidade = ?, emailMed = ?, senhaMed = ? WHERE idMed = ?';
  
    db.query(query, [nomeMedico, sobrenomeMed, especialidade, emailMed, senhaMed, idMedico], (err, result) => {
      if (err) {
        console.error('Erro ao atualizar médico:', err);
        res.send('Erro ao atualizar médico');
      } else {
        res.redirect('/');
      }
    });
  });*/

  module.exports = db