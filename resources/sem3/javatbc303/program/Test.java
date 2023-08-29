// wap in Java to count number of objects in java;
// wap to state the difference between mutable and immmutable string
// wap to multiply two matrices
// class variable and instance variable
class Keyboard {
    static int count = 0;

    Keyboard() {
        count++;
    }

    void display() {
        System.out.println("This is Keyboard class");
    }
}

class Test {
    public static void main(String[] args) {
        Keyboard obj1 = new Keyboard();
        Keyboard obj2 = new Keyboard();
        Keyboard obj3 = new Keyboard();
        System.out.println("The number of objects are = " + Keyboard.count);
    }
}

// instance are the normal variables and these can be multiple for multiple copy
// for objects
// class variable will be one and it will be static
// we cannot declare static as local