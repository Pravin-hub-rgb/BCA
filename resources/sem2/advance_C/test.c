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
void insertAfterNode();
void deleteAtFront();
void deleteAtEnd();
void deleteNode();
void display();

int main()
{
    int choice;
    while (1)
    {
        printf("\n------- MENU Doubly Linked List ---------");
        printf("\n1. Insert at front");
        printf("\n2. Insert at back");
        printf("\n3. Insert after a node");
        printf("\n4. Delete at front");
        printf("\n5. Delete at back");
        printf("\n6. Delete a node");
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
            insertAfterNode();
            break;
        case 4:
            deleteAtFront();
            break;
        case 5:
            deleteAtEnd();
            break;
        case 6:
            deleteNode();
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
    printf("Enter a value : ");
    scanf("%d", &newNode->data);
    newNode->next = NULL;
    newNode->prev = NULL;
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

void insertAfterNode()
{
    if (start == NULL)
    {
        printf("\nlist is empty, cannot insert after a node\n");
        return;
    }
    int node_val;
    printf("\nEnter a node value after which you want to insert : ");
    scanf("%d", &node_val);
    node *temp = start;
    while (temp->data != node_val)
    {
        if (temp->next == NULL)
        {
            printf("\nValue not found");
            return;
        }
        temp = temp->next;
    }
    node *newNode = (node *)malloc(sizeof(node));
    printf("\nEnter the value : ");
    scanf("%d", &newNode->data);
    newNode->next = temp->next;
    temp->next = newNode;
    newNode->prev = temp;
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
    start->prev = NULL;
    printf("\n%d is deleted", temp->data);
    free(temp);
}

void deleteAtEnd()
{
    if (start == NULL)
    {
        printf("\nNo node exist");
        return;
    }
    if (start->next == NULL)
    {
        printf("\n%d is deleted", start->data);
        free(start);
        start = NULL;
        return;
    }
    node *sLast = start;
    while (sLast->next->next != NULL)
    {
        sLast = sLast->next;
    }
    printf("\n%d is deleted", sLast->next->data);
    node *temp = sLast->next;
    sLast->next = NULL;
    free(temp);
}

void deleteNode()
{
    if (start == NULL)
    {
        printf("\nNo node exist");
        return;
    }
    int search;
    node *foundNode;
    printf("Enter a value you want to delete : ");
    scanf("%d", &search);
    foundNode = start;
    while (foundNode->data != search)
    {
        foundNode = foundNode->next;
        if (foundNode == NULL)
        {
            printf("\nValue not found");
            return;
        }
    }
    if (foundNode == start)
    {
        start = start->next;
        start->prev = NULL;
        free(foundNode);
    }
    else if (foundNode->next == NULL)
    {
        foundNode->prev->next = NULL;
        free(foundNode);
    }
    else
    {
        foundNode->prev->next = foundNode->next;
        foundNode->next->prev = foundNode->prev;
        free(foundNode);
    }
        printf("\n%d is deleted", search);
}

void display()
{
    if (start == NULL)
    {
        printf("\nList is empty");
        return;
    }
    node *newNode = start;
    while (newNode != NULL)
    {
        printf("%d --> ", newNode->data);
        newNode = newNode->next;
    }
}