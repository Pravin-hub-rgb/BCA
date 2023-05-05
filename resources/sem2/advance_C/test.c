
#include <stdio.h>
int main()
{
    unsigned int a;
    printf("Enter values of a : ");
    scanf("%d", &a);
    a = a >> 2;
    printf("a >> 2 = %d\t\t", a);
    return 0;
}