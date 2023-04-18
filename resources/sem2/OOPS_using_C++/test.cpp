#include <iostream>
#include <iomanip>
using namespace std;
int main()
{
    int num = 123;

    cout << "Without using setw :" << num << "\n";
    // Using setw() manipulator to set the width of the output field to 10
    cout << "With using setw :" << setw(10) << num << "\n";

    // Using endl manipulator to insert a newline
    cout << "This is on one line." << endl;
    cout << "This is on another line." << endl;

    return 0;
}