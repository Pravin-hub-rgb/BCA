#include <iostream>
using namespace std;
template <class Type>
class Test
{
private:
    Type n;

public:
    void getValue()
    {
        cin >> n;
    }
    void printVal()
    {
        cout << "you entered : " << n << endl;
    }
};
int main()
{
    Test<int> objINT;
    cout << "Enter integer value : ";
    objINT.getValue();
    objINT.printVal();
    Test<float> objFLOAT;
    cout << "Enter real value : ";
    objFLOAT.getValue();
    objFLOAT.printVal();

    return 0;
}
