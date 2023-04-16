#include <stdio.h>
#include <stdlib.h>
typedef struct node
{
    int data;
    struct node *next;
} node;
node *top = NULL;
void push();
void pop();
void display();

int main()
{
    int choice;
    while (1)
    {
        printf("\n\n-!-!-!-!-!- MENU -!-!-!-!-!-");
        printf("\n1. PUSH");
        printf("\n2. POP");
        printf("\n3. DISPLAY");
        printf("\n4. EXIT");
        printf("\n Enter your choice : ");
        scanf("%d", &choice);
        switch (choice)
        {
        case 1:
            push();
            break;
        case 2:
            pop();
            break;
        case 3:
            display();
            break;
        case 4:
            exit(0);
        default:
            printf("\nEnter a correct choice : ");
        }
    }
    return 0;
}

void push()
{
    node *temp = (node *)malloc(sizeof(node));
    if (temp == NULL)
    {
        printf("\nOverflow");
        return;
    }
    printf("\nEnter a digit : ");
    scanf("%d", &temp->data);
    temp->next = top;
    top = temp;
}

void pop()
{
    if (top == NULL)
    {
        printf("\nUnderflow");
        return;
    }
    node *temp = top;
    top = top->next;
    printf("\n%d is deleted", temp->data);
    free(temp);
}

void display()
{
    if (top == NULL)
    {
        printf("\nUnderflow");
        return;
    }
    node *temp = top;
    while (temp != NULL)
    {
        printf("%d ", temp->data);
        temp = temp->next;
    }
}
