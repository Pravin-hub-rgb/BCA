#include <stdio.h>
#include <stdlib.h>
typedef struct node
{
    int data;
    struct node *next;
} node;
node *start = NULL;

void insertAtFront();
void insertAtBack();
void insertAfterNode();
void deleteAtFront();
void deleteAtBack();
void deleteNode();
void display();

int main()
{
    int choice;
    while (1)
    {
        printf("\n------- MENU Circular single linked list ---------");
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
            deleteAtBack();
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
    if (start == NULL)
    {
        start = newNode;
        newNode->next = start;
    }
    else
    {
        newNode->next = start;
        start = newNode;
    }
}

void insertAtBack()
{
    node *newNode = (node *)malloc(sizeof(node));
    node *last = start;
    printf("Enter a value : ");
    scanf("%d", &newNode->data);
    newNode->next = NULL;
    if (start == NULL)
    {
        start = newNode;
        newNode->next = start;
    }
    else
    {
        while (last->next != start)
            last = last->next;
        last->next = newNode;
        newNode->next = start;
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
    newNode->next = NULL;
    printf("\nEnter the value : ");
    scanf("%d", &newNode->data);
    newNode->next = temp->next;
    temp->next = newNode;
}

void deleteAtFront()
{
    if (start == NULL)
    {
        printf("\nNo node exist");
        return;
    }
    if (start->next == start) // there is only one element
    {
        free(start);
        start = NULL;
        return;
    }
    node *last = start, *temp = start;
    while (last->next != start)
        last = last->next;
    start = start->next;
    last->next = start;
    free(temp);
}

void deleteAtBack()
{
    if (start == NULL)
    {
        printf("\nNo node exist");
        return;
    }
    if (start->next == start) // only one element left
    {
        free(start);
        start = NULL;
        return;
    }
    node *temp = start;
    while (temp->next->next != start)
    {
        temp = temp->next;
    }
    free(temp->next);
    temp->next = start;
}

void deleteNode()
{
    if (start == NULL)
    {
        printf("\nNo node exist");
        return;
    }
    int search;
    printf("Enter a value you want to delete : ");
    scanf("%d", &search);
    node *temp = start;
    while (temp->data != search)
    {
        temp = temp->next;
        if (temp->next == NULL)
        {
            printf("\nValue not found");
            return;
        }
    }
    if (temp == start)
        deleteAtFront();
    else if (temp->next == start)
        deleteAtBack();
    else
    {
        node *prev = start;
        while (prev->next != temp)
        {
            prev = prev->next;
        }
        prev->next = temp->next;
    }
}

void display()
{
    if (start == NULL)
    {
        printf("\nEmpty list");
        return;
    }
    node *newNode = start;
    while (newNode->next != start)
    {
        printf("%d --> ", newNode->data);
        newNode = newNode->next;
    }
    printf("%d --> ", newNode->data);
}
                   