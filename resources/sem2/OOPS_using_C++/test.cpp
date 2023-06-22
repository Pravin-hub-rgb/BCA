#include <iostream>
using namespace std;

class Myclass
{
private:
    int value;

public:
    Myclass() {}

    Myclass(int val)
    {
        value = val;
    }

    int getValue()
    {
        return value;
    }

    // Friend function for overloading the * operator
    friend Myclass operator*(Myclass, Myclass);

    // Friend function for overloading the % operator
    friend Myclass operator%(Myclass, Myclass);

    // Friend function for overloading the / operator
    friend Myclass operator/(Myclass, Myclass);
};

Myclass operator*(Myclass obj1, Myclass obj2)
{
    int product = obj1.value * obj2.value;
    return Myclass(product);
}

Myclass operator%(Myclass obj1, Myclass obj2)
{
    int remainder = obj1.value % obj2.value;
    return Myclass(remainder);
}

Myclass operator/(Myclass obj1, Myclass obj2)
{
    int quotient = obj1.value / obj2.value;
    return Myclass(quotient);
}

int main()
{
    Myclass obj1(30);
    Myclass obj2(10);

    Myclass obj3 = obj1 * obj2;
    cout << "Product: " << obj3.getValue() << endl;

    Myclass obj4 = obj1 % obj2;
    cout << "Remainder: " << obj4.getValue() << endl;

    Myclass obj5 = obj1 / obj2;
    cout << "Quotient: " << obj5.getValue() << endl;

    return 0;
}