import java.awt.*;

class Test
{
    public static void main(String[] args)
    {
        Frame frame = new Frame("New Window");
        Label label = new Label("Number 1 : ");
        Button btn1 = new Button("Add");

        frame.add(label);
        frame.add(btn1);
        frame.setVisible(true);
        frame.setSize(400, 200);
    }
}