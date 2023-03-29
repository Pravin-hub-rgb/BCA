#include <stdio.h>
int main()
{
   int a = 5, *pi = &a;
   char b = 'x', *pc = &b;
   float c = 5.5, *pf = &c;
   printf("Value of pi =  Address of a = %u\n", pi);
   printf("Value of pc =  Address of b = %u\n", pc);
   printf("Value of pf =  Address of c = %u\n", pf);
   // now we will increment each pointer
   pi++;
   pc++;
   pf++;
   printf("Now value of pi = %u\n", pi);
   printf("Now value of pc = %u\n", pc);
   printf("Now value of pf = %u\n", pf);
   return 0;
}
/*
output:
Value of pi =  Address of a = 3191752024
Value of pc =  Address of b = 3191752015
Value of pf =  Address of c = 3191751996
Now value of pi = 3191752028
Now value of pc = 3191752016
Now value of pf = 3191752000
in this architecture float and int take 4 bytes.
*/