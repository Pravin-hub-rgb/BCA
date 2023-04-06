#include <iostream>
using namespace std;
class Test
{
private:
    int x;

public:
    void setX(int x)
    {
        // 'this' pointer is used to retrieve the object's x
        // here 'x' is in argument and also a data member
        // using 'this' pointer we can point to data member
        this->x = x;
    }
    void print() { cout << "x = " << x << endl; }
};
int main()
{
    Test obj;
    int x = 20;
    obj.setX(x);
    obj.print();
    return 0;
}