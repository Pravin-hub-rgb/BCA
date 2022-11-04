#include <stdio.h>

int main()
{
    int x = 5, y, b = 10, c;
    y = x++;
    c = b--;
    printf("The value of y is = %d and x is = %d\n", y, x); // The value of y is = 5 and x is = 6
    printf("The value of c is = %d and c is = %d\n", c, b); // The value of c is = 10 and c is = 9
    return 0;
}