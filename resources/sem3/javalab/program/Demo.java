//Program to create a method that takes a string as input and throws an exception if the string does not contain vowels.
class MyException extends RuntimeException {
    MyException(String str) {
        super(str);
    }
}

public class Demo {
    static boolean compareString(String text) {

        // for (int i = 0; i < text.length(); i++) {

        // }
        //
        boolean isAvail = false;
        String s1 = new String("aeiouAEIOU");
        for (int i = 0; i < text.length(); i++) {
            if (text.charAt(i) == 'a' || text.charAt(i) == 'e' || text.charAt(i) == 'i' || text.charAt(i) == 'o'
                    || text.charAt(i) == 'u') {
                isAvail = true;
            }
        }
        return isAvail;
    }

    public static void main(String[] args) {
        if (!compareString("Welcome"))
        {
            throw new MyException("Vowels are not available");
        }
    }
}
