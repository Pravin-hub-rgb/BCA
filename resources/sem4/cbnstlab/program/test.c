#include <stdio.h>
#include <math.h>
#include <stdlib.h> 
#define EPSILON 0.003

float f(float x)
{
    return ((x * x * x) - (9 * x) + 1);
}

int main()
{
    float x1, x2, xn, fn;
    int i = 1;
    printf("Enter Initial Guess: ");
    scanf("%f", &x1);
    scanf("%f", &x2);

    if (f(x1) * f(x2) > 0)
    {
        printf("\nAssumptions are wrong!");
        exit(0);
    }
    do
    {
        xn = ((x1 * f(x2)) - (x2 * f(x1))) / (f(x2) - f(x1));
        fn = f(xn);
        if (f(xn) * f(x1) < 0)
            x2 = xn;
        else
            x1 = xn;
        printf("\nRoot after %d iteration = %f\n", i, xn);
        i = i + 1;
    } while (fabs(f(xn)) > EPSILON);
    return 0;
}