package com.consultorio.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class ConexaoDB {
    private static final String URL = "jdbc:sqlserver://regulus;databaseName=BD23523;encrypt=false";
    private static final String USUARIO = "BD23523";
    private static final String SENHA = "BD23523";

    public static Connection conectar() throws SQLException {
        try {

            Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");

            return DriverManager.getConnection(URL, USUARIO, SENHA);
        } catch (ClassNotFoundException e) {
            throw new SQLException("Driver JDBC não encontrado.", e);
        }
    }
}
