
#include <iostream>
using namespace std;
class Distance
{
private:
    int feet;
    int inches;

public:
    friend void sum(Distance);
    void show()
    {
        cout << "The distance is = " << feet << " Feet " << inches << " Inches";
    }
};

int main()
{
    Distance one;
    sum(one);
    return 0;
}
void sum(Distance d)
{
    int f1, f2, i1, i2;
    cout << "Enter First Distance (in Feet and Inches) : ";
    cin >> f1 >> i1;
    cout << "Enter Second Distance (in Feet and Inches) : ";
    cin >> f2 >> i2;
    d.feet = f1 + f2;
    d.inches = i1 + i2;
    cout << "\nResult is : \n";
    d.show();
}