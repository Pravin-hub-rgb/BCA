#include <stdio.h>

int main()
{
    float SI;
    int P, R, T;

    printf("Enter the value of Principle amount, Time, Interest Rate : ");
    scanf("%d %d %d", &P, &R, &T);

    SI = (P * R * T) / 100;

    printf("The Simple Interest is : %f", SI);

    return 0;
}