import java.util.Scanner;
public class Test
{
    public static void main(String[] args)
    {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a number : ");
        int a = sc.nextInt();

        int temp = a, count = 0;
        while(temp > 0)
        {
            count++;
            temp /= 10;
        }
        System.out.println("The number of digits = " + count);
    }
}