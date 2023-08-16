import java.util.Scanner;

class Test {
    static Scanner input = new Scanner(System.in);
    static int num;

    public static void main(String args[]) {
        System.out.println("Enter your number : ");
        num = input.nextInt();
        System.out.println("Sum of digits = " + sumOfDigits(num));
    }

    public static int sumOfDigits(int num) {
        int sum = 0;
        while (num > 0) {
            sum = sum + (num % 10);
            num /= 10;
        }
        return sum;
    }
}