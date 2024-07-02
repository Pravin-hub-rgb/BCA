/* #include <stdio.h>
#include <stdlib.h>
#include <math.h>
#define EPSILON 0.003
float f(float x)
{
    return x * x * x - 4 * x - 9;
}
float df(float x)
{
    return 3 * x * x - 4;
}

int main()
{
    float x0, x1;
    int i = 1;
    printf("Enter Initial Guess: ");
    scanf("%f", &x0);
    do
    {
        x1 = x0 - (f(x0)/df(x0));
        x0 = x1;
        printf("Root after iteration = %d is %f and value of function = %f\n", i, x1, f(x1));
        i++;
    } while (fabs(f(x1)) > EPSILON);
    return 0;
}
*/

#include <stdio.h>
#include <math.h>
#define EPSILON 0.003

float f(float x)
{
    return ((x * x * x) - 4 * x - 9);
}
float df(float x)
{
    return (3 * x * x - 4);
}

int main()
{
    float x0, x1;
    int i;
    printf("Enter intial guess: ");
    scanf("%f", &x0);
    do
    {
        x1 = x0 - (f(x0) / df(x0));
        x0 = x1;
        i++;
        printf("No. of iteration = %d\t Root = %f\t Value of function = %f\n", i, x1, f(x1));
    } while (fabs(f(x1)) > EPSILON);
    return 0;
}