#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define MAX 100
char stack[MAX];
char infix[MAX], postfix[MAX];
int top = -1;

void push(char);
char pop();
int isEmpty();
void inToPost();
int precedence(char);
void print();
int main()
{
   printf("Enter the infix expression : ");
   gets(infix);
   inToPost(); // function that convert infix to postfix expression
   print();
   return 0;
}
void push(char c)
{
   if (top == MAX - 1)
   {
      printf("Stack overflow");
      return;
   }
   top++;
   stack[top] = c;
}
char pop()
{
   char c;
   if (top == -1)
   {
      printf("Stack underflow");
      exit(0);
   }
   c = stack[top];
   top=top-1;
   return c;
}
int isEmpty()
{
   if (top == -1)
      return 1;
   else
      return 0;
}
int space(char c)
{
   // If symbol is a blank space or a tab
   if (c == ' ' || c == '\t')
      return -1;
   else
      return 1;
}
void inToPost()
{
   int i, j = 0;
   char symbol, next;
   // for(i=0;i!='\0';i++)
   for (i = 0; i < strlen(infix); i++)
   {
      symbol = infix[i];
      switch (symbol)
      {
      case '(':
         push(symbol);
         break;
      case ')':
         while ((next = pop()) != '(')
            postfix[j++] = next;
      case '+':
      case '-':
      case '*':
      case '/':
      case '^':
         while (!isEmpty() && precedence(stack[top]) >= precedence(symbol))
            postfix[j++] = pop();
         push(symbol);
         break;
      default:
         postfix[j++] = symbol;
      }
   }
   while (!isEmpty())
      postfix[j++] = pop();
   postfix[j] = '\0';
}
int precedence(char symbol)
{
   switch (symbol)
   {
   // higher value means greater precedence
   case '^':
      return 3;
   case '/':
   case '*':
      return 2;
   case '+':
   case '-':
      return 1;
   default:
      return 0;
   }
}

void print()
{
   int i = 0;
   printf("The equivalent post fix expression is : ");
   while (postfix[i])
   {
      printf("%c", postfix[i++]);
   }
   printf("\n");
}
/*
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX 100
char stack[MAX];
char infix[MAX], postfix[MAX];
int top = -1;

void push(char);
char pop();
int isEmpty();
void inToPost();
void print();
int precedence(char);

int main()
{
   printf("Enter the infix expression: ");
   gets(infix);
   inToPost();
   print();
   return 0;
}

void inToPost()
{
   int i, j = 0;
   char symbol, next;
   for (i = 0; i < strlen(infix); i++)
   {
      symbol = infix[i];
      switch (symbol)
      {
      case '(':
         push(symbol);
         break;
      case ')':
         while ((next = pop()) != '(')
            postfix[j++] = next;
         break;
      case '+':
      case '-':
      case '*':
      case '/':
      case '^':
         while (!isEmpty() && precedence(stack[top]) >= precedence(symbol))
            postfix[j++] = pop();
         push(symbol);
         break;
      default:
         postfix[j++] = symbol;
      }
   }
   while (!isEmpty())
      postfix[j++] = pop();
   postfix[j] = '\0';
}
int precedence(char symbol)
{
   switch (symbol)
   {
      // Higher value means higher precedence
   case '^':
      return 3;
   case '/':
   case '*':
      return 2;
   case '+':
   case '-':
      return 1;
   default:
      return 0;
   }
}

void print()
{
   int i = 0;
   printf("The equivalent postfix expression is: ");
   while (postfix[i])
   {
      printf("%c", postfix[i++]);
   }
   printf("\n");
}

void push(char c)
{
   if (top == MAX - 1)
   {
      printf("Stack Overflow\n");
      return;
   }
   top++;
   stack[top] = c;
}

char pop()
{
   char c;
   if (top == -1)
   {
      printf("Stack Underflow\n");
      exit(1);
   }
   c = stack[top];
   top = top - 1;
   return c;
}

int isEmpty()
{
   if (top == -1)
      return 1;
   else
      return 0;
}
*/