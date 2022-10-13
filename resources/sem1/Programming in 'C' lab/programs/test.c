#include <stdio.h>

int main()
{
    int num;
    printf("Enter a number : ");
    scanf("%d", &num);
    if (num < 0)
        printf("The entered number is negative");
    else if (num > 0)
        printf("The entered number is positive");
    else
        printf("The entered number is zero");
    return 0;
}