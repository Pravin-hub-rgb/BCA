class Test {
    public static void main(String[] args) {
        // int[] numbers = new int[] { 10, 20, 30, 40, 50 }; // normal array

        // Creating and using an anonymous array for integer values
        // Passing the anonymous array to a method
        int sum = calculateSum(new int[] { 5, 10, 15, 20 });

        System.out.println("Sum of numbers: " + sum);
    }

    // Method to calculate the sum of an array
    public static int calculateSum(int[] array) {
        int sum = 0;
        for (int i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return sum;
    }
}