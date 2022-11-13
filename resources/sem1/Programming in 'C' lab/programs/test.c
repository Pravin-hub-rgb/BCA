#include <stdio.h>

int main()
{
   int n,fact=1;
   printf("Enter the number whose factorial you want to calculate : ");
   scanf("%d",&n);
   int i = 1;
   while(i<=n)
   {
    fact*=i;
    i++;
   }
   printf("The factorial of %d is %d\n",n,fact);
   return 0;
}