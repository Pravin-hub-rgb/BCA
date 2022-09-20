#include <stdio.h>

int fib(int num)
{
    if (num == 1 || num == 2)
        return 1;
    return (fib(num - 1) + fib(num - 2));
}

int main()
{
    int num;
    printf("Enter number of digits you want to see of fibonacci series ");
    scanf("%d", &num);

    for (int i = 1; i <= num; i++)
        printf(" %d ", fib(i));

    return 0;
}