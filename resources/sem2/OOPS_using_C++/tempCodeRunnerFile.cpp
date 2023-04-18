
#include <iostream>
using namespace std;
class Number
{
    int a;

public:
    Number()
    {
        a = 0;
    }
    Number(int num)
    {
        a = num;
    }

    // When no copy constructor is found, compiler supplies its own copy constructor
    Number(Number &obj)
    {
        cout << "Copy constructor" << endl;
        a = obj.a;
    }
    void display()
    {
        cout << "The number for this object is " << a << endl;
    }
};

int main()
{
    Number x, y(333), z(45), z2;
    // x.display();
    // y.display();
    // z.display();

    Number z1(z); // copy constructor invoked
    z1.display();

    z2 = z; // copy constructor not invoked
    Number z3 = y; // now in this time copy constructor will be invoked cuse we are just created this object
    // copy constructor don't get invoked when the object is already created and later we are just assinging some value or another object.
    z3.display();
    return 0;
}