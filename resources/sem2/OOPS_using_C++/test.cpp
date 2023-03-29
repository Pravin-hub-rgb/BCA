#include <iostream>
using namespace std;

void displayPer(int);

class Marks
{
    float percentage;

public:
    Marks() {}
    Marks(int, int);
    Marks(int, int, int);
    Marks(int, int, int, int);
    Marks(int, int, int, int, int);
};

Marks::Marks(int m1, int m2)
{
    percentage = (m1 + m2) / 2;
    displayPer(percentage);
}

Marks::Marks(int m1, int m2, int m3)
{
    percentage = (m1 + m2 + m3) / 3;
    displayPer(percentage);
}

Marks::Marks(int m1, int m2, int m3, int m4)
{
    percentage = (m1 + m2 + m3 + m4) / 4;
    displayPer(percentage);
}

Marks::Marks(int m1, int m2, int m3, int m4, int m5)
{
    percentage = (m1 + m2 + m3 + m4 + m5) / 5;
    displayPer(percentage);
}

void enterMarks(int);

int m[5] = {0}, m1, m2, m3, m4, m5;

int main()
{
    int sub;
    Marks result;
    cout << "----- Percentage Calculator------" << endl;
    cout << "How many subjects do you have : ";
    cin >> sub;
    switch (sub)
    {
    case 2:
        enterMarks(sub);
        result = Marks(m1, m2);
        break;
    case 3:
        enterMarks(sub);
        result = Marks(m1, m2, m3);
        break;
    case 4:
        enterMarks(sub);
        result = Marks(m1, m2, m3, m4);
        break;
    case 5:
        enterMarks(sub);
        result = Marks(m1, m2, m3, m4, m5);
        break;
    default:
        cout << "Enter subject between 1 and 6";
    }
    return 0;
}

void enterMarks(int sub)
{
    for (int i = 1; i <= sub; i++)
    {
        cout << "Enter the marks in subject " << i << " : ";
        cin >> m[i - 1];
    }
    m1 = m[0];
    m2 = m[1];
    m3 = m[2];
    m4 = m[3];
    m5 = m[4];
}

void displayPer(int val)
{
    cout << " you got " << val << "%\n";
}