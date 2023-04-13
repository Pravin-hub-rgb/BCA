#include <stdio.h>
void swap(int x, int y)
{
    int temp = x;
    x = y;
    y = temp;
}
int main()
{
    int a = 50;
    int b = 100;
    printf("\nBefore Swap : \n a = %d \n b = %d", a, b);
    swap(a, b);
    printf("\n\nAfter Swap : \n a = %d \n b = %d\n", a, b);
    return 0;
}