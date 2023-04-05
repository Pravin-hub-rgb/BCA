#include <stdio.h>
int main()
{
   int a = 10;
   void *ptr = &a;
   printf("*ptr = %d", *(int *)ptr);
   return 0;
}