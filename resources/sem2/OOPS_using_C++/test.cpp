#include <iostream>
using namespace std;
class Shape // abstract class
{
public:
    virtual void draw() = 0; // Pure virtual function
};

class Circle : public Shape
{
public:
    void draw() override
    {
        cout << "Drawing Circle." << endl;
    }
};

class Rectangle : public Shape
{
public:
    void draw() override
    {
        cout << "Drawing Rectangle." << endl;
    }
};

int main()
{
    Circle circle;
    Rectangle rectangle;

    circle.draw();
    rectangle.draw();

    return 0;
}
