#include <stdio.h>

int main()
{
   int n,fact=1;
   printf("Enter the number whose factorial you want to calculate : ");
   scanf("%d",&n);
   for (int i = 1; i <= n; i++)
   {
    fact*=i;
   }
   printf("The factorial of %d is %d\n",n,fact);
   return 0;
}