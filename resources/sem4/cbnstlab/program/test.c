#include <stdio.h>
#include <math.h>
#include <stdlib.h>
#define e 0.003

float f(float x)
{
    return x * x * x - 9 * x + 1;
}

float g1(float x)
{
    return pow((9 * x - 1), 1 / 3);
}

float g2(float x)
{
    return ((1 + x * x * x) / 9);
}

int main()
{
    int i = 0;
    float a, b, xm, diff;
    int ch;
    printf("Enter two initial guess = ");
    scanf("%f%f", &a, &b);
    if (f(a) * f(b) > 0)
    {
        printf("You assumptions were wrong");
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
            i++;
            printf("No. of iteration = %d", i);
            printf("Your root is : %f", xnew);
        } while (fabs(diff) > e);
    }
    else if (ch == 2)
    {
        do
        {
            float xnew = g2(xm);
            float diff = fabs(xnew - xm);
            xm = xnew;
            printf("No. of iteration : %d", i);
            printf("Your root is : %f", xnew);
        } while (fabs(diff > e));
    }
    else
    {
        printf("Either choose 1 or 2");
        exit(0);
    }
    return 0;
}
