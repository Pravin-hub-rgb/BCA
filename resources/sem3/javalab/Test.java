import java.util.Scanner;
public class Test
{
    public static void main(String[] args)
    {
        Scanner sc = new Scanner(System.in);
        int num, sum = 0;
        System.out.println("Enter a number : ");
        num = sc.nextInt();
        int temp = num;
        while(temp > 0)
        {
            sum += temp%10;
            temp /= 10;
        }
        System.out.println("The sum is = " + sum);
    }
}