#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#define e 0.003

float f(float x)
{
    return x * x * x - 9 * x + 1;
}

float g1(float x)
{
    return pow((9 * x - 1), 1.0 / 3.0);
}
float g2(float x)
{
    return ((1 + x * x * x) / 9);
}

int main()
{
    int ch, i;
    float a, b, xm, diff;
    printf("Enter initial guess : ");
    scanf("%f%f", &a, &b);
    if (f(a) * f(b) > 0)
    {
        printf("Assumptions are wrong");
        exit(0);
    }
    xm = (a + b) / 2;
    printf("Enter your choice for choice between two method (1 & 2) : ");
    scanf("%d", &ch);
    if (ch == 1)
    {
        do
        {
            float xnew = g1(xm);
            diff = fabs(xnew - xm);
            xm = xnew;
            printf("root = %f\n", xnew);
        } while (diff > e);
    }
    else if (ch == 2)
    {
        do
        {
            float xnew = g2(xm);
            diff = fabs(xnew - xm);
            xm = xnew;
            printf("root = %f\n", xnew);
        } while (diff > e);
    }
    else
    {
        printf("Either choose 1 or 2");
        exit(0);
    }
    return 0;
}

// run  cmd = gcc prog.c -lm