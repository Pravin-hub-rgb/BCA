#include <stdio.h>
#include <math.h>
int main()
{
    int num = 1634;
    // finding the number of digits as that will be the power for each
    int temp = num;
    int power = 0;
    while (temp != 0)
    {
        power++; // as the number of digits will increase so does the power
        temp /= 10;
    }

    // now finding the sum with power as number of digits.
    temp = num;
    int totalSum = 0;
    while (temp != 0)
    {
        int singleDigit = temp % 10;
        totalSum += pow(singleDigit, power);
        temp /= 10;
    }
    // checking if the given number is equal to the total sum.
    if (totalSum == num)
        printf("This number is Armstrong number \n");
    else
        printf("This number is not Armstrong number \n");
    return 0;
}