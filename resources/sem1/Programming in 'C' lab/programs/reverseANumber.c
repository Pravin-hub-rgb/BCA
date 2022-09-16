#include <stdio.h>

int main()
{
    int num;
    printf("Enter a number to reverse it : ");
    scanf("%d", &num);

    int reversedNum = 0;
    while (num != 0)
    {
        reversedNum *= 10;
        reversedNum += num % 10;
        num /= 10;
    }

    printf("Reversed number is %d", reversedNum);
    return 0;
}