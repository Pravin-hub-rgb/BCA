
class MyException extends Exception {
    MyException(String str) {
        super(str);
    }
}

class Test {
    public static void main(String[] args) {
        int n1 = 10;
        try {
            if (n1 % 2 == 0) {
                throw new MyException("Number is even.");
            } else {
                System.out.println("Nothing is wrong");
            }
        } catch (MyException e) {
            System.out.println(e);
        }
    }
}