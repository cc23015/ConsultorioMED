const express = require('app');
const router = express.Router();

router.get('/:id', (req, res) => {
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

router.post('/:id', (req, res) => {
  const idMedico = req.params.id;
  console.log('ID do Médico:', idMedico);

  const { nomeMedico, sobrenomeMed, especialidade, emailMed, senhaMed } = req.body;

  const query = 'UPDATE Medico SET nomeMedico = ?, sobrenomeMed = ?, especialidade = ?, emailMed = ?, senhaMed = ? WHERE idMedico = ?';

  db.query(query, [nomeMedico, sobrenomeMed, especialidade, emailMed, senhaMed, idMedico], (err, result) => {
    if (err) {
      console.error('Erro ao atualizar médico:', err);
      res.send('Erro ao atualizar médico');
    } else {
      res.redirect('/');
    }
  });
});

module.exports = router;