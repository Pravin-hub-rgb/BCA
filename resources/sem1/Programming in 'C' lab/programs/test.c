#include <stdio.h>

int main()
{
   char op;
   int a, b, c;
   printf("Enter the value of a and b : ");
   scanf("%d%d", &a, &b);
   printf("Enter the operator : ");
   scanf(" %c",&op);
   switch (op)
   {
   case '+':
      c = a + b;
      printf("sum = %d\n", c);
      break;
   case '-':
      c = a - b;
      printf("subraction = %d\n", c);
      break;
   case '*':
      c = a * b;
      printf("multiplication = %d\n", c);
      break;
   case '/':
      c = a / b;
      printf("division = %d\n", c);
      break;
   case '%':
      c = a % b;
      printf("remainder = %d\n", c);
      break;

   default:
      printf("Entered the wrong operator\n");
      break;
   }
   return 0;
}