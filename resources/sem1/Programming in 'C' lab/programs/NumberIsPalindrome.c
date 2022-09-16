#include <stdio.h>

int main()
{
    int num;
    printf("Enter a number to check : ");
    scanf("%d", &num);

    // working with edge cases like : if it is a single digit then still it will be plaindrome
    if (num >= 0 && num <= 9)
    {
        printf("The entered number is palindrome \n");
        return 0;
    }

    // here we are reversing the number
    int reversedNum = 0;
    int temp = num;
    while (temp != 0)
    {
        reversedNum *= 10;
        reversedNum += temp % 10;
        temp /= 10;
    }

    // here we are checking if the reversed number is equal to the original number or not.
    if (reversedNum == num)
        printf("The entered number is a palindrome \n");
    else
        printf("The entered number is not a palindrome \n");

    return 0;
}