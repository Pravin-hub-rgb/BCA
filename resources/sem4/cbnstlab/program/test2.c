#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#define EPSILON 0.003

float f(float x)
{
    return x * x * x - 9 * x + 1;
}

float df(float x)
{
    return 3 * x * x - 9;
}
int i1 = 1, i2 = 1;
float bisectionMethod(float x1, float x2)
{
    float xmid;
    do
    {
        xmid = (x1 + x2) / 2;
        if ((f(xmid) * f(x1)) < 0)
        {
            x2 = xmid;
        }
        else
        {
            x1 = xmid;
        }
        i1++;
    } while (fabs(f(xmid)) > EPSILON);
    return xmid;
}
float newtonMethod(float x0)
{
    float f0, x1, f1, dx0;
    do
    {
        f0 = f(x0);
        dx0 = df(x0);
        x1 = x0 - (f0 / dx0);
        f1 = f(x1);
        x0 = x1;
        i2++;
    } while (fabs(f1) > EPSILON);
    return x1;
}
int main()
{
    float b1, b2, n0;
    printf("Enter initial Guess for Bisection method : ");
    scanf("%f%f", &b1, &b2);
    printf("Enter initial Guess for Newton Ralphson method : ");
    scanf("%f", &n0);
    printf("It took %d iteration in Bisection method and the value of root is = %f\n", i1, bisectionMethod(b1, b2));
    printf("It took %d iteration in Newton Ralphson method and the value of root is = %f\n", i2, newtonMethod(n0));

    return 0;
}