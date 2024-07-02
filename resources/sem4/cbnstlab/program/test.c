#include <stdio.h>
#include <stdlib.h>
#include <math.h>
float f(float x)
{
    return x * x * x - 4 * x - 9;
}
float fx2(float x0, float x1)
{
    return x0 - (((x1 - x0) / (f(x1) - f(x0))) * f(x0));
    // return ((x0 * f(x1)) - (x1 * f(x1))) / (f(x1) - f(x0));
}
#define EPSILON 0.003
int main()
{
    float x0, x1, x2, f2;
    int i = 1;
    printf("Enter initial guess:");
    scanf("%f", &x0);
    scanf("%f", &x1);
    if (f(x0) * f(x1) > 0)
    {
        printf("Wrong Assumption");
        exit(0);
    }
    do
    {
        x2 = fx2(x0, x1);
        x0 = x1;
        x1 = x2;
        i++;
    } while (fabs(f(x2)) > EPSILON);
    printf("The required root = %f and f(xn) = %f found at iteration %d\n", x2, f(x2), i);
    return 0;
}
/*

#include <stdio.h>
#include <math.h>
#include <stdlib.h>
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
    float x0, x1, x2, f0, f1, f2;
    int i = 1;
    printf("Enter Initial Guess: ");
    scanf("%f%f", &x0, &x1);
    do
    {
        // x2 = ((x0 * f(x1)) - (x1 * f(x0))) / (f(x1) - f(x0));
        // x2 = x0 - (((x1 - x0) / (f(x1) - f(x0))) * f(x0));
        x2 = fx2(x0, x1);
        f2 = f(x2);
        x0 = x1;
        x1 = x2;
        printf("Root after iteration = %d is %f and value of function = %f\n", i, x2, f2);
        i++;
    } while (fabs(f2) > EPSILON);
    return 0;
}
*/