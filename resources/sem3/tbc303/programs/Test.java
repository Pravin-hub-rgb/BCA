import java.util.Scanner;

class initial {
    public int a;
    public int b;
    public int mult;

    void getValue() {
        Scanner input = new Scanner(System.in);
        System.out.println("Enter the first number : ");
        a = input.nextInt();
        System.out.println("Enter the second number : ");
        b = input.nextInt();
        input.close();
    }

    void calValue() {
        mult = a * b;
    }

    void display() {
        System.out.println("The multiplication is = " + mult);
    }
}

class Test{
    public static void main(String args[])
    {
        initial obj = new initial();
        obj.getValue();
        obj.calValue();
        obj.display();
    }
}