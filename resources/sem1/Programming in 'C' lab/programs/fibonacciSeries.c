#include <stdio.h>

int main()
{
    int num;
    printf("Enter a digits till you want fibonnaci series : ");
    scanf("%d", &num);
    int a = 0;
    int b = 1;
    printf("%d %d", a, b);
    for (int i = 0; i < num - 2; i++)
    {
        printf(" %d ", a + b);
        int temp = a + b;
        a = b;
        b = temp;
    }

    return 0;
}