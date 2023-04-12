#include <stdio.h>
#include <stdlib.h>
struct node
{
   int data;
   struct node *next;
} *top = NULL;
void push(int);
void pop();
int main()
{
   int choice;
   int val;
   while (1)
   {
      printf("\n----------MENU----------");
      printf("\n1. PUSH");
      printf("\n2. POP");
      printf("\n3. DISPLAY");
      printf("\n4. EXIT");
      printf("\nEnter your choice : ");
      scanf("%d", &choice);

      switch (choice)
      {
      case 1:
         printf("\nEnter a value : ");
         scanf("%d", &val);
         push(val);
         break;
      case 2:
         pop();
         break;
      case 4:
         exit(0);
      default:
         printf("\nEnter a correct choice");
      }
   }
   return 0;
}
void push(int val)
{
   struct node *temp = (struct node *)malloc(sizeof(struct node));
   if (temp == NULL)
      printf("Memory overflow");
   else
   {
      temp->data = val;
      temp->next = top;
      top = temp;
   }
}
void pop()
{
   if (top == NULL)
      printf("Stack underflow");
   else
   {
      struct node *temp = top;
      top = top->next;
      printf("\n%d is deleted form stack", temp->data);
      free(temp);
   }
}
/*
#include <stdio.h>
#include <stdlib.h>

// Structure to create a node with data and the next pointer
struct node {
    int info;
    struct node *ptr;
}*top,*top1,*temp;

int count = 0;
// Push() operation on a  stack
void push(int data) {
     if (top == NULL)
    {
        top =(struct node *)malloc(1*sizeof(struct node));
        top->ptr = NULL;
        top->info = data;
    }
    else
    {
        temp =(struct node *)malloc(1*sizeof(struct node));
        temp->ptr = top;
        temp->info = data;
        top = temp;
    }
    count++;
    printf("Node is Inserted\n\n");
}

int pop() {
     top1 = top;

    if (top1 == NULL)
    {
        printf("\nStack Underflow\n");
        return -1;
    }
    else
        top1 = top1->ptr;
    int popped = top->info;
    free(top);
    top = top1;
    count--;
    return popped;
}

void display() {
    // Display the elements of the stack
    top1 = top;

    if (top1 == NULL)
    {
        printf("\nStack Underflow\n");
        return;
    }

    printf("The stack is \n");
    while (top1 != NULL)
    {
        printf("%d--->", top1->info);
        top1 = top1->ptr;
    }
    printf("NULL\n\n");

}

int main() {
    int choice, value;
    printf("\nImplementation of Stack using Linked List\n");
    while (1) {
        printf("\n1. Push\n2. Pop\n3. Display\n4. Exit\n");
        printf("\nEnter your choice : ");
        scanf("%d", &choice);
        switch (choice) {
        case 1:
            printf("\nEnter the value to insert: ");
            scanf("%d", &value);
            push(value);
            break;
        case 2:
            printf("Popped element is :%d\n", pop());
            break;
        case 3:
            display();
            break;
        case 4:
            exit(0);
            break;
        default:
            printf("\nWrong Choice\n");
        }
    }
}

*/