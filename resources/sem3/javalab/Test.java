import java.util.Scanner;
public class Test
{
    public static void main(String[] args)
    {
        Scanner sc = new Scanner(System.in);
        int a;
        System.out.println("Enter a number : ");
        a = sc.nextInt();
        int rev = 0, temp = a;
        while(temp > 0)
        {
            rev *= 10;
            rev += temp % 10;
            temp /= 10;
        }
        System.out.println("The reverse is = " + rev);
            if(rev == a)
            {
                System.out.println("The given number is a palindrome");
            } else 
            {
                System.out.println("The given number is not a palindrome");
            }
    }
}