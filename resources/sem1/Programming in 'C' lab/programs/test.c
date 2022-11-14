#include <stdio.h>

int main()
{
   int a, b;
   char op;
   printf("Enter the value of 'a' and 'b' : ");
   scanf("%d%d", &a, &b);
   printf("Enter the operation from : '+', '-', '/', '*', '%%' : ");
   scanf(" %c", &op);
   if (op == '+')
      printf("The sum of %d and %d is %d\n", a, b, a + b);
   else if (op == '-')
      printf("The subtraction of %d and %d is %d\n", a, b, a - b);
   else if (op == '*')
      printf("The multiplication of %d and %d is %d\n", a, b, a * b);
   else if (op == '/')
      printf("The division of %d and %d is %d\n", a, b, a / b);
   else if (op == '%')
      printf("The modulus of %d and %d is %d\n", a, b, a % b);
   else
      printf("You enter wrong operator\n");

   return 0;
}