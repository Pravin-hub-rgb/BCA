import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class TestStuff implements ActionListener {
    private JTextField tf1, tf2, tf3;

    public TestStuff() {
        JFrame mainFrame = new JFrame("Simple Calculator");
        mainFrame.setLayout(new FlowLayout());
        mainFrame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        JLabel label1 = new JLabel("Enter First Number:");
        JLabel label2 = new JLabel("Enter Second Number:");
        tf1 = new JTextField(10);
        tf2 = new JTextField(10);

        JButton addButton = new JButton("Add");
        JButton subButton = new JButton("Sub");
        JButton multButton = new JButton("Mult");
        JButton divButton = new JButton("Div");
        JButton resetButton = new JButton("Reset");

        tf3 = new JTextField(10);
        tf3.setEditable(false);

        addButton.addActionListener(this);
        subButton.addActionListener(this);
        multButton.addActionListener(this);
        divButton.addActionListener(this);
        resetButton.addActionListener(this);

        mainFrame.add(label1);
        mainFrame.add(tf1);
        mainFrame.add(label2);
        mainFrame.add(tf2);
        mainFrame.add(addButton);
        mainFrame.add(subButton);
        mainFrame.add(multButton);
        mainFrame.add(divButton);
        mainFrame.add(resetButton);
        mainFrame.add(tf3);

        mainFrame.setSize(400, 200);
        mainFrame.setVisible(true);
    }

    public void actionPerformed(ActionEvent e) {
        try {
            int num1 = Integer.parseInt(tf1.getText());
            int num2 = Integer.parseInt(tf2.getText());
            int num3 = 0;

            if (e.getActionCommand().equals("Add")) {
                num3 = num1 + num2;
            } else if (e.getActionCommand().equals("Sub")) {
                num3 = num1 - num2;
            } else if (e.getActionCommand().equals("Mult")) {
                num3 = num1 * num2;
            } else if (e.getActionCommand().equals("Div")) {
                num3 = num1 / num2;
            } else if (e.getActionCommand().equals("Reset")) {
                tf1.setText("");
                tf2.setText("");
                tf3.setText("");
                return; // Skip setting the result field for Reset button
            }

            tf3.setText(String.valueOf(num3));
        } catch (NumberFormatException | ArithmeticException ex) {
            tf3.setText("Error");
        }
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> new TestStuff());
    }
}
