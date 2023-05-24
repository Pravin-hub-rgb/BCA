#include <stdio.h>
#include <stdlib.h>

typedef struct node
{
    struct node *prev;
    int data;
    struct node *next;
} node;
node *start = NULL;

void insertAtFront();
void insertAtBack();
void insertAtPos(int);
void deleteAtFront();
void deleteAtEnd();
void deleteAtPos(node *p, int pos);
void display();
int length(node *);

int main()
{
    int choice, pos, data;
    while (1)
    {
        printf("\n------- MENU Doubly Linked List ---------");
        printf("\n1. Insert at front");
        printf("\n2. Insert at back");
        printf("\n3. Insert at position");
        printf("\n4. Delete at front");
        printf("\n5. Delete at back");
        printf("\n6. Delete at position");
        printf("\n7. Display");
        printf("\n8. Exit");
        printf("\nEnter you choice : ");
        scanf("%d", &choice);
        switch (choice)
        {
        case 1:
            insertAtFront();
            break;
        case 2:
            insertAtBack();
            break;
        case 3:
            printf("Enter the pos value : ");
            scanf("%d", &pos);
            insertAtPos(pos);
            break;
        case 4:
            deleteAtFront();
            break;
        case 5:
            deleteAtEnd();
            break;
        case 6:
            printf("\nEnter the pos where you want to delete : ");
            scanf("%d", &pos);
            deleteAtPos(start, pos);
            break;
        case 7:
            display();
            break;
        case 8:
            exit(0);
        default:
            printf("\nEnter a correct choice");
        }
    }
    return 0;
}
void insertAtFront()
{
    node *newNode = (node *)malloc(sizeof(node));
    printf("Enter a value : ");
    scanf("%d", &newNode->data);
    newNode->next = start;
    newNode->prev = NULL;
    start = newNode;
}

void insertAtBack()
{
    node *newNode = (node *)malloc(sizeof(node));
    node *last = start;
    newNode->next = NULL;
    newNode->prev = NULL;
    printf("Enter a value : ");
    scanf("%d", &newNode->data);
    if (start == NULL)
        start = newNode;
    else
    {
        while (last->next != NULL)
            last = last->next;
        last->next = newNode;
        newNode->prev = last;
    }
}

void insertAtPos(int pos)
{
    node *newNode;
    int i, data;
    newNode = (node *)malloc(sizeof(node));
    newNode->next = NULL;
    newNode->prev = NULL;
    if (start == NULL && pos == 1)
        goto label;
    if (pos < 0 || pos > length(start))
    {
        printf("\nCannot insert at %d position", pos);
        return;
    }
label:
    printf("\nEnter data value : ");
    scanf("%d", &data);
    newNode->data = data;
    if (pos == 1)
    {
        if (start == NULL)
        {
            newNode->prev = NULL;
            newNode->next = NULL;
            start = newNode;
        }
        else
        {
            newNode->prev = NULL;
            newNode->next = start;
            start->prev = newNode;
            start = newNode;
        }
    }
    else
    {
        node *p = start;
        for (i = 0; i <= pos; i++)
            p = p->next;
        newNode = (node *)malloc(sizeof(node));
        newNode->data = data;
        newNode->prev = p;
        newNode->next = p->next;
        if (p->next)
            p->next->prev = newNode;
        p->next = newNode;
    }
}

void deleteAtFront()
{
    if (start == NULL)
    {
        printf("\nNo node exist");
        return;
    }
    node *temp = start;
    start = start->next;
    if (start != NULL)
        start->prev = NULL;
    free(temp);
}

void deleteAtEnd()
{
    if (start == NULL)
    {
        printf("\nEmpty List");
        return;
    }
    node *last = start;
    while (last->next != NULL)
        last = last->next;
    // if (start == last)
    // {
    //     free(last);
    //     start = NULL;
    // }
        last->prev->next = NULL;
        free(last);
        last = NULL;
}

void deleteAtPos(node *p, int pos)
{
    int x = -1, i;
    if (pos < 0 || pos > length(p))
        return;
    if (pos == 1)
    {
        start = start->next;
        if (start)
            start->prev = NULL;
        free(p);
    }
    else
    {
        for (i = 0; i < pos; i++)
            p = p->next;
        p->prev->next = p->next;
        if (p->next)
            p->next->prev = p->prev;
        free(p);
    }
}

void display()
{
    if (start == NULL)
    {
        printf("\nList is empty");
        return;
    }
    node *temp = start;
    while (temp != NULL)
    {
        printf("%d <-> ", temp->data);
        temp = temp->next;
    }
}

int length(node *p)
{
    int len = 0;
    while (p)
    {
        len++;
        p = p->next;
    }
    return len;
}
