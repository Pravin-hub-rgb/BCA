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
    float x1, x2, x, f1, f2, fx;
    int i, n;
    printf("Enter Initial Guess: ");
    scanf("%f", &x1);
    scanf("%f", &x2);
    printf("Enter number of iteration : ");
    scanf("%d", &n);
    for (i = 0; i < n; i++)
    {

        f1 = f(x1);
        f2 = f(x2);
        x = ((x1 * f2) - (x2 * f1)) / (f2 - f1);
        fx = f(x);
        if ((fabs(x - x2) < EPSILON) || f(x) == 0)
        {
            printf("Required root is %f found at %d iteration", x, i + 1);
            exit(0);
        }
        x1 = x2;
        x2 = x;
        f1 = f2;
        f2 = fx;
    }
    printf("\nSolution does not converge in %d iterations", i);
    return 0;
}