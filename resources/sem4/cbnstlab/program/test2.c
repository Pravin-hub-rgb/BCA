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
    float x0, x1, f0, f1, df0;
    int i, n;
    printf("Enter intial guess:");
    scanf("%f", &x0);
    do
    {
        f0 = f(x0);
        df0 = df(x0);
        x1 = x0 - (f0 / df0);
        f1 = f(x1);
        x0 = x1;
        i++;
        printf("No of iteration = %d\t Root = %f\t Value of function = %f\n", i, x1, f1);
    } while (fabs(f1) > EPSILON);
    return 0;
}