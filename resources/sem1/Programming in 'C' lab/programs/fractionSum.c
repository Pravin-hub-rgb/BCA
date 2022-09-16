// might need correction in future.

#include <stdio.h>
#include <math.h>
int main()
{
    float sum = 0;
    for (int i = 0; i < 26; i++)
    {
        printf("Sum each time = %f \n",sum);
        sum += 1 / pow(2, i);
    }
    printf("The sum is = %f", sum);
    return 0;
}