import group.Shape.*;
class Test{
    public static void main(String[] args)
    {
        group.Shape obj = new group.Shape();
        obj.sqarea();
    }
    static void area(int side)
    {
        System.out.println("The area of square = " + side * side);
    }
    static void area(int len, int bred)
    {
        System.out.println("The area of rectangle : " + len * bred);
    }
    static void area(double radius)
    {
        System.out.println("The area of circle = " + 3.14 * radius * radius);
    }
}