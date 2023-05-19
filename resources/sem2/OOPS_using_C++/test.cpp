/*#include <iostream>
using namespace std;
class Complex
{
    private:
    int real, imag;
    public:
    Complex(int r = 0, int i = 0)
    {
        real = r;
        imag = i;
    }

    // This is automatically called when '+' is used with between two Complex objects
    Complex operator+(Complex obj)
    {
        Complex res;
        res.real = real + obj.real;
        res.imag = imag + obj.imag;
        return res;
    }
    void print() { cout << real << " + i" << imag << endl; }
};
int main()
{
    Complex c1(10, 5), c2(2, 4);
    Complex c3 = c1 + c2;
    c3.print();
    return 0;
}*/

#include <iostream>
using namespace std;
class Marks
{
    int intmark;
    int extmark;

public:
    Marks()
    {
        intmark = 0;
        extmark = 0;
    }
    Marks(int im, int em)
    {
        intmark = im;
        extmark = em;
    }
    void display()
    {
        cout << intmark << endl
             << extmark << endl;
    }
    Marks operator+(Marks m)
    {
        Marks temp;
        temp.intmark = intmark + m.intmark;
        temp.extmark = extmark + m.extmark;
        return temp;
    }
};
int main()
{
    Marks m1(10, 20), m2(30, 40);
    Marks m3 = m1 + m2;
    m3.display();
    return 0;
}