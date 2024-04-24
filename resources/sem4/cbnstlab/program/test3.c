#include <stdio.h>
#include <stdlib.h>
#include <math.h>

float f(float x)
{
    return (x * x * x - 9 * x + 1);
}
float g1(float x)
{
    return (pow((9 * x - 1), 1.0 / 3.0));
}
float g2(float x)
{
    return (x * x * x + 1 / 9);
}

void main()
{
    float x1, x2, xm, xnew, ch, diff, e = 0.003;

    printf("Enter initial guesses :");
    scanf("%f%f", &x1, &x2);

    if ((f(x1) * f(x2)) > 0)
    {
        printf("exit");
        exit(1);
    }

    xm = (x1 + x2) / 2;
    printf("Enter choice : \n 1: g1\n 2: g2\n");
    scanf("%f", &ch);
    if (ch == 1)
    {
        do
        {
            xnew = g1(xm);
            diff = fabs(xnew - xm);
            xm = xnew;
            printf("Root : %f\n", xnew);
        } while (diff > e);
    }
    if (ch == 2)
    {
        do
        {
            xnew = g2(xm);
            diff = fabs(xnew - xm);
            xm = xnew;
            printf("Root : %f\n", xnew);
        } while (diff > e);
    }
}
