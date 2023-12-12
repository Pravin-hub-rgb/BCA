import java.util.Scanner;

public class Test {
    public static void main(String[] args)
    {
        String str1 = new String("Hello");
        str1 = str1.concat(" world");
        System.out.println(str1);

        StringBuffer str2 = new StringBuffer("Hello");
        str2.append(" world");
        System.out.println(str2);
    }
}