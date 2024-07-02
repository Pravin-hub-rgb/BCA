#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#define EPSILON 0.003
float f(float x)
{
    return x * x * x - 4 * x - 9;
}
float fx2(float x0, float x1)
{
    return x0 - (((x1 - x0) / (f(x1) - f(x0))) * f(x0));
}

int main()
{
    float x0, x1, x2;
    int i = 1;
    printf("Enter Initial Guess: ");
    scanf("%f%f", &x0, &x1);
    do
    {
        x2 = ((x0 * f(x1)) - (x1 * f(x0))) / (f(x1) - f(x0));
        x0 = x1;
        x1 = x2;
        printf("Root after iteration = %d is %f and value of function = %f\n", i, x2, f(x2));
        i++;
    } while (fabs(f(x2)) > EPSILON);
    return 0;
}