#include <iostream>
using namespace std;
class employee
{
    int id;
    int salary;

public:
    void getdata(void);
    void putdata(void);
};
int main()
{
    employee e[10]; // array of objects
    for (int i = 0; i < 10; i++)
    {
        e[i].getdata();
    }
    for (int i = 0; i < 10; i++)
    {
        e[i].putdata();
    }
    return 0;
}

void employee ::getdata()
{
    cout << "Enter id : ";
    cin >> id;
    cout << "Enter salary : ";
    cin >> salary;
}
void employee ::putdata()
{
    cout << "\nEnter id : " << id;
    cout << "\nEnter salary : " << salary;
}