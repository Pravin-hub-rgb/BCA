#include <iostream>
using namespace std;

int main()
{
    int a, b;
    float r;
    cout << "Enter the value of a : ";
    cin >> a;
    try
    {
        cout << "Enter the value of b : ";
        cin >> b;
        if (b == 0)
            throw 0;
        r = a / b;
        cout << "The result if : " << r << endl;
    }
    catch (int)
    {
        cout << "cannot divide by zero" << endl;
        ;
    }
    return 0;
}