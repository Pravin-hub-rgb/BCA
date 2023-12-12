import java.util.Scanner;

public class Test {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a;
        System.out.println("Enter a number : ");
        a = sc.nextInt();
        if (checkPalindrome(a)) {
            System.out.println("It is a palindrome");
        } else {
            System.out.println("Not a palindrome");
        }
    }

    static boolean checkPalindrome(int a) {
        int rev = 0, temp = a;
        while (temp > 0) {
            rev *= 10;
            rev += temp % 10;
            temp /= 10;
        }
        if (rev == a)
            return true;
        return false;
    }
}