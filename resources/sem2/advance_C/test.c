#include <stdio.h>
#include <stdlib.h>
#define MAX 5
int queue[MAX];
int rear = -1;
int front = -1;
void enqueue()
{
    if ((rear + 1) % MAX == front)
    {
        printf("\nQueue is full");
        return;
    }
    if (front == -1 && rear == -1)
    {
        front = rear = 0;
        printf("\nEnter the element : ");
        scanf("%d", &queue[rear]);
    }
    else
    {
        rear = (rear + 1) % MAX;
        printf("\nEnter the element : ");
        scanf("%d", &queue[rear]);
    }
}
void dequeue()
{
    if (front == -1 && rear == -1)
    {
        printf("\nQueue is empty");
    }
    else if (front == rear)
    {
        printf("\n%d is deleted", queue[front]);
        front = rear = -1;
    }
    else
    {
        printf("\n%d is deleted", queue[front]);
        front = (front + 1) % MAX;
    }
}
void display()
{
    int i;
    if (front == -1 && rear == -1)
        printf("\nQueue is empty\n");
    else
    {
        if (front <= rear)
        {
            for (i = front; i <= rear; i++)
                printf("%d\n", queue[i]);
        }
        else
        {
            for (i = front; i < MAX; i++)
                printf("%d\n", queue[i]);
            for (i = 0; i <= rear; i++)
                printf("%d\n", queue[i]);
        }
    }
}
int main()
{
    int ch;
    while (1)
    {
        printf("\n------- MENU FOR CIRCULAR QUEUE -------");
        printf("\n1.Enqueue Operation\n");
        printf("2.Dequeue Operation\n");
        printf("3.Display the Queue\n");
        printf("4.Exit\n");
        printf("Enter your choice of operations : ");
        scanf("%d", &ch);
        switch (ch)
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
        default:
            printf("\nIncorrect choice \n");
        }
    }
    return 0;
}