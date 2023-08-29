public class StrClass {
    public static void main(String[] args) {
        String str = new String("Hello");
        str.concat("Welcome");
        System.out.println(str);

        StringBuilder sb = new StringBuilder("Hello");
        sb.append(" Welcome");
        System.out.println(sb);
    }
}
