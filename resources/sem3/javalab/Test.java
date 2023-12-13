class Test {
    public static void main(String[] args) {
        int[] arr = { 1, 44, 2, 5, 55, 66, 3 };
        for (int i = 0; i < arr.length; i++) {
            for (int j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[i]) {
                    int temp = arr[j];
                    arr[j] = arr[i];
                    arr[i] = temp;
                }
            }
            int[][] arr1 = new int[][] {{1, 2, 3}, {2, 4, 4}};
        }
        System.out.println("Printing array ");
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
        }
    }
}