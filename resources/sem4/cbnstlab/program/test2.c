#include <stdio.h>
#include <math.h>
#include <stdlib.h>

float f(float x)
{
    return x * x * x - 9 * x + 1; // example function
}

void main()
{
    int i = 1;
    float xn, x1, x2, epsilon = 0.003, delta = 0.003, fn, f1, f2;
    printf("\n enter initial");
    scanf("%f", &x1);
    scanf("%f", &x2);

    if (f(x1) * f(x2) > 0)
    {
        printf("\nwrong Assumption");
        exit(1);
    }

    do
    {
        if (fabs(f(x2) - f(x1)) < delta)
        {
            printf("\nSlope is Small");
            exit(1);
        }

        xn = x1 - ((x2 - x1) * f(x1)) / (f(x2) - f(x1));
        fn = f(xn);
        if (f(xn) * f(x2) < 0)
            x1 = xn;
        else
            x2 = xn;
        printf("\n value after %d iteration:%f", i, xn);
        i = i + 1;
    } while (fabs(f(xn)) > epsilon);
}