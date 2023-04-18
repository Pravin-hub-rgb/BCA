#include <iostream>
using namespace std;
int area(int);
float area(float);
int area(int, int);
double area(double);
int main()
{
    cout << "Area of square is : " << area(5) << endl;
    // cout << "Area of square  in floating point is : " << area(5.7) << endl; // this is not working properly
    cout << "Area of square  in floating point is : " << area((float)5.7) << endl;
    cout << "Area of rectangle is : " << area(5, 10) << endl;
    cout << "Area of circle is : " << area(3.8) << endl;
    return 0;
}
int area(int a)
{
    return a * a;
}
float area(float a)
{
    return a * a;
}
int area(int a, int b)
{
    return a * b;
}
double area(double a)
{
    return (314 * a * a) / 100;
}
