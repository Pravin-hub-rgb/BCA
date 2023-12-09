// import java.awt.*;
// import java.awt.event.*;
// import javax.swing.*; // swing fast chalta hai


// class TestFrameWin extends Frame implements ActionListener {
//     FlowLayout fl;
//     Frame f1;
//     Label lbl_n1, lbl_n2, lbl_ans;
//     TextField txt_n1, txt_n2, txt_ans;
//     Button btn_add, btn_sub, btn_div, btn_mul, btn_reset;

//     TestFrameWin() {
//         fl = new FlowLayout();
//         f1 = new Frame("Welcome");
//         lbl_n1 = new Label("Num 1");
//         lbl_n2 = new Label("Num 2");
//         lbl_ans = new Label("Ans");
//         txt_n1 = new TextField(20);
//         txt_n2 = new TextField(20);
//         txt_ans = new TextField(20);
//         btn_add = new Button("Add");
//         btn_sub = new Button("Sub");
//         btn_div = new Button("Div");
//         btn_mul = new Button("Mut");
//         btn_reset = new Button("Reset");

//         btn_add.addActionListener(this);
//         btn_sub.addActionListener(this);
//         btn_div.addActionListener(this);
//         btn_mul.addActionListener(this);
//         btn_reset.addActionListener(this);

//         f1.setLayout(fl);
//         f1.add(lbl_n1);
//         f1.add(txt_n1);
//         f1.add(new Label("  "));
//         f1.add(lbl_n2);
//         f1.add(txt_n2);
//         f1.add(new Label("  "));
//         f1.add(lbl_ans);
//         f1.add(txt_ans);
//         f1.add(new Label("  "));
//         f1.add(btn_add);
//         f1.add(btn_sub);
//         f1.add(btn_div);
//         f1.add(btn_mul);
//         f1.add(btn_reset);

//         f1.setSize(500, 300);

//         f1.setVisible(true);

//     }

//     public void actionPerformed(ActionEvent e) {
//         int v1, v2, ans = 0;
//         v1 = Integer.parseInt(txt_n1.getText());
//         v2 = Integer.parseInt(txt_n2.getText());
//         if (e.getSource() == btn_add) {
//             ans = v1 + v2;
//         }
//         if (e.getSource() == btn_sub) {
//             ans = v1 - v2;
//         }
//         if (e.getSource() == btn_div) {
//             ans = v1 / v2;
//         }
//         if (e.getSource() == btn_mul) {
//             ans = v1 * v2;
//         }
//         if (e.getSource() == btn_reset) {
//             txt_n1.setText("");
//             txt_n2.setText("");
//             txt_ans.setText("");
//         }
//         String s1 = String.valueOf(ans);
//         txt_ans.setText(s1);
//     }
// }

// class TestWin2 {
//     public static void main(String[] args) {
//         TestFrameWin obj = new TestFrameWin();
//     }
// }

