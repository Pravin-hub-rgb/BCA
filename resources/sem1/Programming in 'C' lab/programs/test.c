#include <stdio.h>
#include <math.h>
int main()
{
    float a, b, c, r1, r2, d;
    printf("Enter the values for equation : ");
    scanf("%f%f%f", &a, &b, &c);
    d = b * b - 4 * a * c;
    if (d > 0)
    {
        r1 = (-b + sqrt(d)) / 2 * a;
        r2 = (-b - sqrt(d)) / 2 * a;
        printf("roots are real and unequal\n");
        printf("%f\n%f\n", r1, r2);
    }
    else
        printf("roots are imaginary");
    return 0;
}