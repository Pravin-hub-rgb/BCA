#include <stdio.h>
int mult(int a, int b)
{
    return a * b;
}
int main()
{
    int x, y;
    int (*ptr_mult)(int, int);
    ptr_mult = &mult;
    printf("Enter the value of a : ");
    scanf("%d", &x);
    printf("Enter the value of b : ");
    scanf("%d", &y);
    printf("The multiplication of %d and %d is = %d",x,y,(*ptr_mult)(x,y));
    return 0;
}