import java.awt.*;
// holds frame class and Test field stuff
// we need base window which can contain other fields
// Text field - from where we can accept input from user
// label - gives direction for the input field - explains what that input field is there for.
// button - generates some events - when we click something should happen
// label, test field, button, frame, applet are classes which are part of awt package.
// there are some scenrario, with frame we don't need...

class TestFrameWin extends Frame {
    FlowLayout fl; // we have to set this in constructor function
    Frame f1;
    Label lbl1;
    TextField txt1;
    Button btn1;

    TestFrameWin() {
        fl = new FlowLayout();
        f1 = new Frame("Welcome"); // "Welcome" goes to Title bar on browser
        lbl1 = new Label("Enter Text");
        txt1 = new TextField(20); // 20 is the width of the Text Field
        btn1 = new Button("Click"); // "Click" is the caption
        // now we need to patch this on the frame 
        f1.setLayout(fl);
        f1.add(lbl1);
        f1.add(txt1);
        f1.add(btn1);

        // now we have to set the size of the frame
        f1.setSize(500, 300);

        // now frame visibility
        f1.setVisible(true); // The frame will be displayed (if false the tab will be minimized)

    }
}

class TestWin {
    public static void main(String[] args) {
        TestFrameWin obj = new TestFrameWin(); // this will call default constructor
    }
}

// layout is the map - programmer have to tell which thing will be where and which size
// we have multiple class (grid, card, flow)
// commonly we use FlowLayout - things are set row by row