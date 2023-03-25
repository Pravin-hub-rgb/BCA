#include <iostream>
using namespace std;
class Prac
{
public:
    static int var;
};
int Prac::var = 1;
int main()
{
    Prac obj1, obj2;
    // initially the value of "var" is 1
    // now we will try to increment is using one object
    obj1.var++;
    cout << obj1.var << " " << obj2.var << endl;
    // above we are trying to check the value of "var" from both the object
    // and it is giving 2 which means it is being shared.
    return 0;
}