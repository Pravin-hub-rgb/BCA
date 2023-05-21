#include <iostream>
using namespace std;
class A
{
public:
    int x, y;
    A()
    {
        x = 10;
        y = 10;
    }
};
class B : public A
{
public:
    int sum;
    B()
    {
        sum = x + y;
    }
};
class C
{
public:
    int z;
    C()
    {
        z = 20;
    }
};
class D : public B, public C
{
public:
    int total_sum;
    D()
    {
        total_sum = sum + z;
    }
};
int main()
{
    D d_one;
    cout << "The total sum is = " << d_one.total_sum << endl;
    return 0;
}