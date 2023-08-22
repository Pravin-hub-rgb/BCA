import java.util.Scanner;

// class Initial {
//     void display() {
//         System.out.println("Hellow world");
//     }
// }

// WAP to retrieve number of digits in  a number

class Test {
    public static void main(String[] args) {
        int num = 3455;
        int count = 0;
        while (num > 0) {
            count++;
            num /= 10;
        }
        System.out.println("Number of digits = " + count);
    }
}