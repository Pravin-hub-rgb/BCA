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
void deleteANode();
void display();

int main()
{
    int choice;
    while (1)
    {
        printf("\n------- MENU ---------");
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
            deleteANode();
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
    node *newnode = (node *)malloc(sizeof(node));
    printf("Enter a value : ");
    scanf("%d", &newnode->data);
    newnode->next = start;
    start = newnode;
}

void insertAtBack()
{
    node *newnode = (node *)malloc(sizeof(node));
    node *last = start;
    printf("Enter a value : ");
    scanf("%d", &newnode->data);
    newnode->next = NULL;
    if (start == NULL)
        start = newnode;
    else
    {
        while (last->next != NULL)
            last = last->next;
        last->next = newnode;
    }
}

void insertAfterNode()
{
    if (start == NULL)
    {
        printf("\nList is empty cannot insert after a node\n");
        return;
    }
    int node_val;
    printf("\nEnter a node value after which you want to insert : ");
    scanf("%d", &node_val);
    node *ptr = start;
    while (ptr->data != node_val)
    {
        if (ptr->next == NULL)
        {
            printf("\n Node not found cannot insert element");
            return;
        }
        ptr = ptr->next;
    }
    if (ptr->next == NULL)
    {
        insertAtBack();
        return;
    }
    node *newNode = (node *)malloc(sizeof(node));
    newNode->next = NULL;
    printf("\nEnter the value : ");
    scanf("%d", &newNode->data);
    newNode->next = ptr->next;
    ptr->next = newNode;
}

void deleteAtFront()
{
    if (start == NULL)
    {
        printf("\nList is empty");
        return;
    }
    node *temp = start;
    start = start->next;
    free(temp);
}

void deleteAtBack()
{
    if (start == NULL)
    {
        printf("\nList is empty");
        return;
    }
    if (start->next == NULL)
    {
        free(start);
        start = NULL;
        return;
    }
    node *temp = start;
    while (temp->next->next != NULL)
        temp = temp->next;
    free(temp->next);
    temp->next = NULL;
}

void deleteANode()
{
    if (start == NULL)
    {
        printf("\nList is empty");
        return;
    }
    int search;
    printf("Enter a value you want to delete : ");
    scanf("%d", &search);
    node *temp = start;
    while (temp->data != search)
    {
        if (temp->next == NULL)
        {
            printf("\nValue not found");
            return;
        }
        temp = temp->next;
    }
    if (temp == start)
        deleteAtFront();
    else if (temp->next == NULL)
        deleteAtBack();
    else
    {
        node *prev = start;
        while (prev->next != temp)
            prev = prev->next;
        prev->next = temp->next;
    }
}

void display()
{
    if (start == NULL)
    {
        printf("\nList is empty");
        return;
    }
    node *newnode = start;
    while (newnode != NULL)
    {
        printf("%d --> ", newnode->data);
        newnode = newnode->next;
    }
}