#include <stdio.h>
#include <stdlib.h>
#define MAX 5
int queue[MAX];
int rear = -1;
int front = -1;
void enqueue()
{
    if (rear == MAX - 1)
    {
        printf("\nQueue is full");
        return;
    }
    if (front == -1 && rear == -1)
    {
        front = rear = 0;
    }
    else
    {
        rear++;
    }
    printf("\nEnter the element : ");
    scanf("%d", &queue[rear]);
}
void dequeue()
{
    int val;
    if (front == -1 && rear == -1)
    {
        printf("\nQueue is empty");
        return;
    }
    val = queue[front];
    if (front == rear)
    {
        front = rear = -1;
    }
    else
    {
        front++;
    }
    printf("\n%d is deleted", val);
}
void display()
{
    int i;
    if (front == -1 && rear == -1)
    {
        printf("\nQueue is empty\n");
        return;
    }
    for (i = front; i <= rear; i++)
    {
        printf("\n%d", queue[i]);
    }
}
int main()
{
    int ch;
    while (1)
    {
        printf("\n------- MENU -------");
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