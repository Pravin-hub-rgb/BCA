class Test {
    public static void main(String[] args) {
        String str1 = new String("Hello");
        str1.concat(" World");
        System.out.println(str1); // Hello was printed although we concatenated " World" that means it is
                                  // immutable

        StringBuffer str2 = new StringBuffer("Hello");
        str2.append(" World");
        System.out.println(str2); // Hello World is printed
    }
}