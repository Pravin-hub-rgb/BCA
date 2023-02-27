#include <stdio.h>

struct distance
{
    int k, m, c;
};

int main()
{
    struct distance d1, d2, sum;
    for (int i = 1; i <= 2; i++)
    {
        printf("Enter the %d distance in Kilometers : ", i);
        scanf("%d", (i == 1) ? &d1.k : &d2.k);
        printf("Enter the %d distance in meters : ", i);
        scanf("%d", (i == 1) ? &d1.m : &d2.m);
        printf("Enter the %d distance in centimeters : ", i);
        scanf("%d", (i == 1) ? &d1.c : &d2.c);
    }
    sum.k = d1.k + d2.k;
    sum.m = d1.m + d2.m;
    sum.c = d1.c + d2.c;
    if (sum.c >= 100)
    {
        int times = sum.c / 100;
        for (int i = 0; i < times; i++)
        {
            sum.m++;
        }
        sum.c = sum.c % 100;
    }
    if (sum.m >= 1000)
    {
        int times = sum.m / 1000;
        for (int i = 0; i < times; i++)
        {
            sum.k++;
        }
        sum.m = sum.m % 1000;
    }
    printf("Sum distance KM : %d\n", sum.k);
    printf("Sum distance M : %d\n", sum.m);
    printf("Sum distance CM : %d\n", sum.c);
    return 0;
}