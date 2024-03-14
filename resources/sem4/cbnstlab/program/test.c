#include <stdio.h>
#include <math.h>
#include <stdlib.h>
#define EPSILON 0.003
float f(float x)
{
    return ((x * x * x) - 9 * x + 1);
}
float df(float x)
{
    return (3 * x * x - 9);
}
int main()
{
    float x0, x1, y, dy, diff;
    int n, i;
    printf("Enter the initial guess : ");
    scanf("%f", &x0);
    printf("Enter the value of iteration : ");
    scanf("%d", &n);
    for (i = 0; i < n; i++)
    {
        y = f(x0);
        dy = df(x0);
        if (fabs(dy) < EPSILON)
        {
            printf("\nSlope is too small");
            exit(0);
        }
        x1 = x0 - (y / dy);
        diff = fabs(x1 - x0);
        x0 = x1;
        if (diff < EPSILON)
        {
            printf("Root = %f at iteration %d", x0, i + 1);
            exit(0);
        }
    }
    printf("Solution do not converge in given in %d iteration", n);
    return 0;
}

/*
#include <stdio.h>
#include <math.h>
#include <stdlib.h>

float f(float x)
{
    return ((x * x * x) - 9 * x + 1);
}
float df(float x)
{
    return (3 * x * x - 9);
}

void main()
{
    float x0, e = 0.003, y, diff, x1, dy;
    int i, n;
    printf("\n Enter intial guess:");
    scanf("%f", &x0);
    printf("Iterations to be checked");
    scanf("%d", &n);
    for (i = 0; i < n; i++)
    {
        y = f(x0);   // calling function f(x)
        dy = df(x0); // calling differentiation df(x)
        if (fabs(dy) < e)
        {
            printf("Slope is too small");
            exit(1);
        }
        x1 = x0 - (y / dy);
        diff = fabs(x1 - x0);
        x0 = x1;
        if (diff < e)
        {
            printf("Root %f is found at %d iteration", x0, i + 1);
            exit(1);
        }
    }
    printf("Solution do not converge");
}
*/