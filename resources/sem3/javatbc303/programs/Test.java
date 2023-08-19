class Test {
    public static void main(String[] args) {
        int arr1[] = { 2, 4, 6, 8, 99, 1 };
        int arr2[] = { 2, 1, 2, 3, 9, 4 };
        System.out.print("arr1 : ");
        display(arr1);
        System.out.print("arr2 : ");
        display(arr2);
        System.out.print("Sum of arr1 and arr2 : ");
        sumTwoArray(arr1, arr2);

    }

    public static void sumTwoArray(int[] arr1, int[] arr2) {
        int newArray[] = new int[arr1.length];
        for (int i = 0; i < arr1.length; i++) {
            newArray[i] = arr1[i] + arr2[i];
        }
        display(newArray);
    }

    public static void display(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
        }
        System.out.println("");
    }
}