#include <stdio.h>
int main()
{
    int a = 10, b = 7;
    printf("The value of a and b before swap : a = %d & b = %d\n", a, b);
    a = a ^ b;
    b = a ^ b;
    a = a ^ b;
    printf("The value of a and b after swap : a = %d & b = %d\n", a, b);
    return 0;
}