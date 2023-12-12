import java.awt.*;
class Test
{
    public static void main(String[] args)
    {
        Frame frame = new Frame("New Window");
        FlowLayout fl = new FlowLayout();
        Label lab1 = new Label("Name : ");
        Label lab2 = new Label("Password : ");
        TextField tf1 = new TextField(20);
        TextField tf2 = new TextField(20);
        Button btn1 = new Button("Submit");

        frame.add(lab1);
        frame.add(tf1);
        frame.add(lab2);
        frame.add(tf2);
        frame.add(btn1);

        frame.setLayout(fl);
        frame.setVisible(true);
        frame.setSize(300, 200);
    }
}