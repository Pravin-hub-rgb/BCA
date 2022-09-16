#include <stdio.h>

int main()
{
    int num;
    printf("Enter a digit : ");
    scanf("%d", &num);
    int sum = 0;
    while (num > 0)
    {
        sum += num % 10;
        num /= 10;
    }
    printf("The sum of digits is : %d",sum);

    return 0;
}