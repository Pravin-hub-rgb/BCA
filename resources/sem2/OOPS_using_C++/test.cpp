#include <iostream>
using namespace std;
class item
{
    int number;
    float cost;

public:
    void getData(int, float);
    void showData(void) // definition inside the function
    {
        cout << number << endl;
        cout << cost << endl;
    }
};
void item ::getData(int a, float b) // definition outside the function
{
    number = a;
    cost = b;
}
int main()
{
    item x, y;
    x.getData(100, 105.15);
    x.showData();
    y.getData(180, 195.15);
    y.showData();
    return 0;
}