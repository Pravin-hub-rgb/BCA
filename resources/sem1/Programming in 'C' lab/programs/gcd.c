#include <stdio.h>

int GCD(int a, int b)
{
    if (a == b)
        return a;
    if (a % b == 0)
        return b;
    if (b % a == 0)
        return a;

    if (a > b)
        return GCD(a % b, b);
    else
        return GCD(a, b % a);
}

int main()
{
    printf("GCD is %d \n", GCD(105, 91));

    return 0;
}