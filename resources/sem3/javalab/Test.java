import java.util.Scanner;

public class Test {
    public static void main(String[] args)
    {
        int[] arr1 = {1, 2, 3, 4};
        int[] arr2 = {2, 3, 4, 5};
        sumArray(arr1, arr2);
    }
    static void sumArray(int[] a1, int[] a2)
    {
        int[] sum = new int[a1.length];
        for(int i = 0; i < a1.length; i++)
        {
            sum[i] = a1[i] + a2[i];
        }
        displayArr(sum);
    }
    static void displayArr(int[] s)
    {
        for(int i = 0; i < s.length; i++)
        {
            System.out.print(s[i] + " ");
        }
    }
}