
#include <stdio.h>
#include <stdlib.h>
typedef struct node
{
    int data;
    struct node *next;
} node;
node *front = NULL;
node *rear = NULL;
void enqueue();
void dequeue();
void display();

int main()
{
    int choice;
    while (1)
    {
        printf("\n\n-!-!-!-!-!- MENU -!-!-!-!-!-");
        printf("\n1. Enqueue");
        printf("\n2. Dequeue");
        printf("\n3. DISPLAY");
        printf("\n4. EXIT");
        printf("\n Enter your choice : ");
        scanf("%d", &choice);
        switch (choice)
        {
        case 1:
            enqueue();
            break;
        case 2:
            dequeue();
            break;
        case 3:
            display();
            break;
        case 4:
            exit(0);
        }
    }
    return 0;
}

void enqueue()
{
    node *temp = (node *)malloc(sizeof(node));
    if (temp == NULL)
    {
        printf("\nOverflow");
        return;
    }
    printf("\nEnter a digit : ");
    scanf("%d", &temp->data);
    temp->next = front;
    if (front == NULL)
    {
        front = rear = temp;
    }
    else
    {
        rear->next = temp;
        rear = temp;
    }
}

void dequeue()
{
    if (front == NULL)
    {
        printf("\nUnderflow");
        return;
    }
    node *temp = front;
    if (front == rear)
    {
        front = rear = NULL;
    }
    else
    {
        front = front->next;
        rear->next = front;
    }
    printf("\n%d is deleted", temp->data);
    free(temp);
}

void display()
{
    if (front == NULL)
    {
        printf("\nUnderflow");
        return;
    }
    node *temp = front;
    while (temp->next != front)
    {
        printf("%d ---> ", temp->data);
        temp = temp->next;
    }
    printf("%d", temp->data);
}