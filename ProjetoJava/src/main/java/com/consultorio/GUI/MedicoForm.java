package com.consultorio.GUI;

import com.consultorio.model.Medico;
import com.consultorio.dao.MedicoDAO;

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class MedicoForm {
    private JPanel panelMain;
    private JTextField nomeTextField;
    private JTextField sobrenomeTextField;
    private JTextField crmTextField;
    private JTextField telefoneTextField;
    private JTextField emailTextField;
    private JButton salvarButton;

    public MedicoForm() {
        panelMain = new JPanel();
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            MedicoForm medicoForm = new MedicoForm();  
            JFrame frame = new JFrame("Cadastro de Médico");
            frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    
            JPanel panel = new JPanel(new GridLayout(6, 2, 10, 10));
            panel.setBorder(BorderFactory.createEmptyBorder(20, 20, 20, 20));
    
            JLabel titleLabel = new JLabel("Cadastro de Médico");
            titleLabel.setFont(new Font("Arial", Font.BOLD, 18));
            titleLabel.setHorizontalAlignment(SwingConstants.CENTER);
            frame.getContentPane().add(titleLabel, BorderLayout.NORTH);
    
            medicoForm.nomeTextField = new JTextField();  
            medicoForm.sobrenomeTextField = new JTextField();
            medicoForm.crmTextField = new JTextField();
            medicoForm.telefoneTextField = new JTextField();
            medicoForm.emailTextField = new JTextField();
    
            addField(panel, "Nome:", medicoForm.nomeTextField);
            addField(panel, "Sobrenome:", medicoForm.sobrenomeTextField);
            addField(panel, "CRM:", medicoForm.crmTextField);
            addField(panel, "Telefone:", medicoForm.telefoneTextField);
            addField(panel, "Email:", medicoForm.emailTextField);
    
            medicoForm.salvarButton = new JButton("Salvar");
            medicoForm.salvarButton.addActionListener(new ActionListener() {
                @Override
                public void actionPerformed(ActionEvent e) {
                    medicoForm.cadastrarMedico();
                }
            });
            panel.add(new JLabel());
            panel.add(medicoForm.salvarButton);
    
            frame.getContentPane().add(panel, BorderLayout.CENTER);
            frame.pack();
            frame.setSize(400, frame.getHeight());
            frame.setResizable(false);
            frame.setLocationRelativeTo(null);
            frame.setVisible(true);
        });
    }

    private static void addField(JPanel panel, String labelText, JTextField textField) {
        JLabel label = new JLabel(labelText);
        label.setHorizontalAlignment(SwingConstants.RIGHT);
        panel.add(label);
        panel.add(textField);
    }

    private void cadastrarMedico() {
        Medico medico = new Medico();
        medico.setNome(nomeTextField.getText());
        medico.setSobrenome(sobrenomeTextField.getText());
        medico.setCrm(crmTextField.getText());
        medico.setTelefone(telefoneTextField.getText());
        medico.setEmail(emailTextField.getText());

        MedicoDAO medicoDAO = new MedicoDAO();
        medicoDAO.salvar(medico);

        JOptionPane.showMessageDialog(null, "Médico cadastrado com sucesso!");
    }
}
