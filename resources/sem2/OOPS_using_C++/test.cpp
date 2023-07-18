
#include <iostream>
#include <fstream>
using namespace std;
int main()
{
    int a;
    ifstream file1;
    file1.open("abc.txt");
    file1 >> a;
    cout << "1 =  " << a << endl;
    file1 >> a;
    cout << "2 =  " << a << endl;
    file1 >> a;
    cout << "3 =  " << a << endl;
    return 0;
}