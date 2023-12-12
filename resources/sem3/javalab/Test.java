class Test {
    public static void main(String[] args) {
        int x = 10, y = 20;
        double l = 100, m = 200;
        System.out.println(addition(x, y));
        System.out.println(addition(l, m));
        System.out.println(addition(x, m));
    }

    static int addition(int a, int b) {
        return a + b;
    }

    static int addition(double a, double b) {
        return (int) a + (int) b;
    }

    static int addition(int a, double b) {
        return a + (int) b;
    }
}