
#include <stdio.h>
#include <math.h>
#include <stdlib.h>
#define EPSILON 0.003
float f(float x)
{
    return x * x * x - 9 * x + 1;
}

int main()
{
    float x0, x1, x2, f0, f1, f2;
    int i;
    printf("Enter Initial Guess: ");
    scanf("%f%f", &x0, &x1);
    do
    {
        f1 = f(x0);
        f2 = f(x1);
        x2 = ((x0 * f2) - (x1 * f1)) / (f2 - f1);
        f2 = f(x2);
        f0 = f1;
        f1 = f2;
        x0 = x1;
        x1 = x2;
        i++;
        printf("Required root is %f found at %d iteration and value of function = %f\n", x2, i, f2);
    } while (fabs(f2) > EPSILON);
    return 0;
}