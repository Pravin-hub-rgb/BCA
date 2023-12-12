import java.util.Scanner;

class Test {
    public static void main(String[] args) {
        try {
            Scanner sc = new Scanner(System.in);
            int v1, v2, ans = 0;
            System.out.println("Enter first number : ");
            v1 = sc.nextInt();
            System.out.println("second number : ");
            v2 = sc.nextInt();
            ans = v1 / v2;
            System.out.println(ans);
        } catch (Exception e) {
            System.out.println(e);
        }
    }
}