#include <stdio.h>
#include <stdlib.h>
void push(int[], int*, int);
void pop(int[], int*);
void display(int[], int);
// stack declaration

int main()
{
   const int MAX = 5;
   int stack[MAX], top = -1, choice;
   while (1)
   {
      printf("\n\n**** MENU *****");
      printf("\n1. PUSH");
      printf("\n2. POP");
      printf("\n3. DISPLAY");
      printf("\n4. EXIT");
      printf("\nEnter your choice : ");
      scanf("%d", &choice);

      switch (choice)
      {
      case 1:
         push(stack, &top, MAX);
         break;
      case 2:
         pop(stack, &top);
         break;
      case 3:
         display(stack, top);
         break;
      case 4:
         exit(0);
      default:
         printf("\nEnter a correct choice");
      }
   }
   return 0;
}
void push(int stack[], int *top, int MAX)
{
   if (*top >= MAX - 1)
      printf("\n\nStack overflow\n\n");
   else
   {
      (*top)++;
      printf("\nEnter a value : ");
      scanf("%d", &stack[*top]);
      printf("\n\n%d is pushed\n\n", stack[*top]);
   }
}
void pop(int stack[], int *top)
{
   int val;
   if (*top <= -1)
      printf("\n\nStack underflow\n\n");
   else
   {
      val = stack[*top];
      (*top)--;
      printf("\n\n%d is popped\n\n", val);
   }
}
void display(int stack[], int top)
{
   int i;
   if (top <= -1)
      printf("\n\nStack underflow\n\n");
   else
   {
      for (i = top; i >= 0; i--)
      {
         printf("\n%d", stack[i]);
      }
   }
}