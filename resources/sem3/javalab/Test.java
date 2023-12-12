import java.util.InputMismatchException;
import java.util.Scanner;

class Test {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a, b, ans;
        try {

            System.out.print("Enter first number : ");
            a = sc.nextInt();
            System.out.print("Enter second number : ");
            b = sc.nextInt();
        } catch (InputMismatchException e) {
            // } catch (InputMismatchException e) {
            System.out.println(e);
        }
        try {
            String str = "abc";
            int x = Integer.parseInt(str);
        } catch (NumberFormatException e) {
            System.out.println(e);
        }
    }
}