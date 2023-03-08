#include <iostream>
using namespace std;
void swap(int *x, int *y)
{
    int temp = *x;
    *x = *y;
    *y = temp;
}
int main()
{
    int a = 5, b = 10;
    cout << "Value of a and b before swap : a = " << a << ", b = " << b << endl;
    swap(&a, &b);
    cout << "Value of a and b after swap : a = " << a << ", b = " << b << endl;
    return 0;
}