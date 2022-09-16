#include <stdio.h>
#include <math.h>

int main()
{
    int num;
    printf("Enter a number : ");
    scanf("%d", &num);
    for (int i = 2; i < sqrt(num); i++)
    {
        if (num % 2 == 0)
        {
            printf("The number is not prime \n");
            return 0;
        }
        else
        {
            printf("The entered number is prime \n");
            return 0;
        }
    }

    return 0;
}