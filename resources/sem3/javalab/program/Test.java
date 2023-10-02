import java.util.InputMismatchException;
import java.util.Scanner;

class Test
{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num1 = 0;
        int num2 = 0;
        int sum = 0;
        try
        {
            System.out.println("Enter first number : ");
        num1 = sc.nextInt();
        System.out.println("Enter second number : ");
        num2 = sc.nextInt();
        }
        catch(InputMismatchException e)
        {
            System.out.println(e);
        }
        try
        {
            String str = "123Human";
            int num3 = Integer.parseInt(str);
        } 
        catch(NumberFormatException e)
        {
            System.out.println(e);
        }
    }
}