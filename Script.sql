CREATE TABLE Medico (
    idMedico INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    nomeMedico VARCHAR(20) NOT NULL,
    sobrenomeMed VARCHAR(30) NOT NULL,
    especialidade VARCHAR(30) NOT NULL,
    emailMed VARCHAR(100) NOT NULL,
    senhaMed VARCHAR(20) NOT NULL
);

CREATE VIEW view_medicos AS
SELECT
idMedico,
nomeMedico,
sobrenomeMed,
especialidade,
emailMed,
senhaMed
FROM Medico;

CREATE PROCEDURE 
excluirMedicoPorID(IN id INT)
BEGIN
    DELETE FROM Medico WHERE idMedico = id;
END

CREATE PROCEDURE inserirMedico(
    
    IN nomeMedico_V VARCHAR(255),
    IN sobrenomeMed_V VARCHAR(255),
    IN especialidade_V VARCHAR(255),
    IN emailMed_V VARCHAR(255),
    IN senhaMed_V VARCHAR(255)
)
BEGIN 
INSERT INTO Medico (nomeMedico, sobrenomeMed, especialidade,
emailMed, senhaMed)
VALUES (nomeMedico_V, sobrenomeMed_V, especialidade_V, emailMed_V,
senhaMed_V);
END