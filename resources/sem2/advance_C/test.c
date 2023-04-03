#include <stdio.h>
#include <stdlib.h>
#define N 5
int deque[N];
int F = -1, R = -1;
void display();
void enqueueFront();
void enqueueRear();
void dequeueFront();
void dequeueRear();
int main()
{
   int ch;
   while (1)
   {
      printf("\n------- MENU FOR DEQUE -------");
      printf("\n1.Enqueue Front Operation\n");
      printf("2.Enqueue Rear Operation\n");
      printf("3.Dequeue  Front Operation\n");
      printf("4.Dequeue  Rear Operation\n");
      printf("5.Display the Queue\n");
      printf("6.Exit\n");
      printf("Enter your choice of operations : ");
      scanf("%d", &ch);
      switch (ch)
      {
      case 1:
         enqueueFront();
         break;
      case 2:
         enqueueRear();
         break;
      case 3:
         dequeueFront();
         break;
      case 4:
         dequeueRear();
         break;
      case 5:
         display();
         break;
      case 6:
         exit(0);
      default:
         printf("\nIncorrect choice \n");
      }
   }
   return 0;
}

void display()
{
   int i;
   if (F == -1 && R == -1)
      printf("\nQueue is empty\n");
   else
   {
      if (F <= R)
      {
         for (i = F; i <= R; i++)
            printf("%d\n", deque[i]);
      }
      else
      {
         for (i = F; i < N; i++)
            printf("%d\n", deque[i]);
         for (i = 0; i <= R; i++)
            printf("%d\n", deque[i]);
      }
   }
}

void enqueueFront()
{
   if ((F == 0 && R == N - 1) || (F == R + 1))
   {
      printf("\nDeque is Full\n");
      return;
   }
   else if (F == -1 && R == -1)
      F = R = 0;
   else if (F == 0)
      F = N - 1;
   else
      F--;
   printf("\nEnter the value you want to enter : ");
   scanf("%d", &deque[F]);
}

void enqueueRear()
{
   if ((F == 0 && R == N - 1) || (F == R + 1))
   {
      printf("\nDeque is Full\n");
      return;
   }
   else if (F == -1 && R == -1)
      F = R = 0;
   else if (R == N - 1)
      R = 0;
   else
      R++;
   printf("\nEnter the value you want to enter : ");
   scanf("%d", &deque[R]);
}

void dequeueFront()
{
   int val;
   if (F == -1 && R == -1)
   {
      printf("\nDeque is Empty\n");
      return;
   }
   else if (F == R)
   {
      val = deque[F];
      F = R = -1;
   }
   else if (F == N - 1)
   {
      val = deque[F];
      F = 0;
   }
   else
   {
      val = deque[F];
      F++;
   }
   printf("\n%d is deleted", val);
}
void dequeueRear()
{
   int val;
   if (F == -1 && R == -1)
   {
      printf("\nDeque is Empty\n");
      return;
   }
   else if (F == R)
   {
      val = deque[R];
      F = R = -1;
   }
   else if (R == 0)
   {
      val = deque[R];
      R = N - 1;
   }
   else
   {
      val = deque[R];
      R--;
   }
   printf("\n%d is deleted", val);
}