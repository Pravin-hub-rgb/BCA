#include <iostream>
using namespace std;
class calculation
{
    int num1;
    int num2;
    int sum_v;
    int sub_v;
    int div_v;
    int mut_v;

public:
    calculation();
    void sum();
    void sub();
    void div();
    void multiply();
    void show();
};
calculation::calculation()
{
    num1 = 10;
    num2 = 20;
}
void calculation::sum()
{
    sum_v = num1 + num2;
}
void calculation::sub()
{
    sub_v = num1 - num2;
}
void calculation::div()
{
    div_v = num1 / num2;
}
void calculation::multiply()
{
    mut_v = num1 * num2;
}
void calculation::show()
{
    cout << "The sum is = " << sum_v << endl;
    cout << "The subtraction is = " << sub_v << endl;
    cout << "The multiplication is = " << mut_v << endl;
    cout << "The division is = " << div_v << endl;
}
int main()
{
    calculation x;
    x.sum();
    x.sub();
    x.multiply();
    x.div();
    x.show();
    return 0;
}
