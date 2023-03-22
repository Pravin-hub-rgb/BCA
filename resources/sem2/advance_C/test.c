#include <stdio.h>
int main()
{
   int var = 10, var2 = 20;
   int *ptr;
   int *q;
   ptr = &var;
   q = &var2;
   *q = *ptr; // not this is valid
   printf("%d", *q);
   return 0;
}