#include <iostream>
using namespace std;
class Sum
{
    int a, b;

public:
    Sum()
    {
        cout << "Constructor is called" << endl;
        a = 1;
        b = 2;
    }
    ~Sum()
    {
        cout << "Destructor is called using free()" << endl;
    }
    void show()
    {
        cout << "a = " << a << endl;
        cout << "b = " << b << endl;
    }
};
int main()
{
    Sum *ptr;
    ptr = new Sum; // dynamic object creation
    ptr->show(); // Accessing member through pointer to object
    delete ptr; // Destroying object dynamically
    return 0;
}