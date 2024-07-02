
#include <stdio.h>

float findValueAt(float x)
{
    return x * x * x;
}

int main()
{
    int n;
    float sum = 0, h, a, b, i;
    printf("Enter the upper limit value : ");
    scanf("%f", &a);
    printf("Enter the lower limit value : ");
    scanf("%f", &b);
    printf("Enter the number of Intervals : ");
    scanf("%d", &n);
    sum = findValueAt(a) + findValueAt(b);
    h = (a + b) / n;
    for (i = a + h; i < b; i = i + h)
    {
        sum = sum + (2 * findValueAt(i));
    }
    sum = (sum * h) / 2;
    printf("Value of the Integral is = %f\n", sum);
    return 0;
}
                        
