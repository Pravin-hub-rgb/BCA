#include <stdio.h>

int main()
{
    int num1, num2, num3;
    printf("Enter the first number : ");
    scanf("%d", &num1);
    printf("Enter the second number : ");
    scanf("%d", &num2);
    printf("Enter the third number : ");
    scanf("%d", &num3);
    if (num1 >= num2 && num1 >= num3)
        printf("%d is the highest number entered.", num1);
    if (num2 >= num1 && num2 >= num3)
        printf("%d is the highest number entered.", num2);
    if (num3 >= num1 && num3 >= num2)
        printf("%d is the highest number entered.", num3);
    return 0;
}