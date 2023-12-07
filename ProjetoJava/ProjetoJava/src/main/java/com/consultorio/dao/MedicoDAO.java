package com.consultorio.dao;

import com.consultorio.model.Medico;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class MedicoDAO {
    public void salvar(Medico medico) {
        String sql = "INSERT INTO med.medico (nome, sobrenome, crm, telefone, email) VALUES (?, ?, ?, ?, ?)";

        try (Connection conexao = ConexaoDB.conectar();
             PreparedStatement preparedStatement = conexao.prepareStatement(sql)) {

            preparedStatement.setString(1, medico.getNome());
            preparedStatement.setString(2, medico.getSobrenome());
            preparedStatement.setString(3, medico.getCrm());
            preparedStatement.setString(4, medico.getTelefone());
            preparedStatement.setString(5, medico.getEmail());

            preparedStatement.executeUpdate();

            System.out.println("Médico cadastrado com sucesso!");

        } catch (SQLException e) {
            System.err.println("Erro ao cadastrar médico: " + e.getMessage());
        }
    }
}