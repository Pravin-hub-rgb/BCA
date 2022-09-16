#include <stdio.h>

int factorialR(int num)
{
    if (num == 0)
        return 1;
    return num * factorialR(num - 1);
}

int main()
{
    int num;
    printf("Enter a number for factorial calculation : ");
    scanf("%d", &num);

    printf("Factorial of %d is %d \n", num, factorialR(num));

    return 0;
}