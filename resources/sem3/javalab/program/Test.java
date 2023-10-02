class MyException extends Exception {
    public MyException(String message) {
        super(message);
    }
}

class Test {
    // This method declares that it may throw a custom exception.
    public void divide(int numerator, int denominator) throws MyException {
        if (denominator == 0) {
            // Simulate a custom exception (for demonstration purposes).
            throw new MyException("Division by zero is not allowed.");
        }
        int result = numerator / denominator;
        System.out.println("Result: " + result);
    }

    public static void main(String[] args) {
        Test myObj = new Test();
        try {
            myObj.divide(10, 0);
        } catch (MyException e) {
            System.out.println("Caught an exception: " + e.getMessage());
        }
    }
}
