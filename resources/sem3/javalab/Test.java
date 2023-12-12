import java.util.Scanner;
class Parent 
{
    final void parentDisplay()
    {
        System.out.println("This is display method which is final from Parent class");
    }
}
class Child extends Parent
{
    @Override
    void parentDisplay()
    {
        System.out.println("Trying to extend it");
    }
}
public class Test {
    public static void main(String[] args)
    {
        Parent p1 = new Parent();
        Child c1 = new Child();
    }
}