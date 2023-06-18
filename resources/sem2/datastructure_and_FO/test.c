#include <stdio.h>
#include <stdlib.h>
typedef struct node
{
    struct node *prev;
    int data;
    struct node *next;
} node;
node *start = NULL;
void insert_front(int val)
{
    node *newNode = (node *)malloc(sizeof(node));
    newNode->data = val;
    newNode->prev = NULL;
    newNode->next = NULL;
    if (start == NULL)
    {
        start = newNode;
    }
    else
    {
        newNode->next = start;
        start->prev = newNode;
        start = newNode;
    }
}
void insert_last(int val)
{
    node *newNode = (node *)malloc(sizeof(node));
    newNode->next = NULL;
    newNode->prev = NULL;
    newNode->data = val;

    if (start == NULL)
    {
        start = newNode;
    }
    else
    {
        node *ptr = start;
        while (ptr->next != NULL)
        {
            ptr = ptr->next;
        }
        newNode->prev = ptr;
        ptr->next = newNode;
    }
}
void insertAfterANode()
{
    if (start == NULL)
    {
        printf("\nList is empty, cannot insert a node");
        return;
    }
    int ele;
    printf("Enter the element after which you insert new element : ");
    scanf("%d", &ele);
    node *ptr = start;
    while (ptr->data != ele)
    {
        if (ptr->next == NULL)
        {
            printf("\n Element not found, cannot insert element");
            return;
        }
        ptr = ptr->next;
    }
    node *newNode = (node *)malloc(sizeof(node));
    newNode->next = NULL;
    newNode->prev = NULL;
    printf("Enter the node value : ");
    scanf("%d", &newNode->data);
    if (ptr == start)
    {
        newNode->prev = start;
        start->next = newNode;
    }
    else if (ptr->next == NULL)
    {
        ptr->next = newNode;
        newNode->prev = ptr;
    }
    else
    {
        newNode->next = ptr->next;
        newNode->prev = ptr;
        ptr->next->prev = newNode;
        ptr->next = newNode;
    }
}
void delete_front()
{
    if (start == NULL)
    {
        printf("\t\tUnderflow");
        return;
    }
    if (start->next == NULL)
        start = NULL;
    else
    {
        node *ptr = start;
        start = start->next;
        ptr->next = NULL;
        start->prev = NULL;
        free(ptr);
    }
}
void delete_last()
{

    if (start == NULL)
    {
        printf("\t\tUnderflow");
        return;
    }
    node *ptr = start;
    while (ptr->next != NULL)
    {
        ptr = ptr->next;
    }
    if (ptr->prev == NULL)
        start = NULL;
    else
    {
        ptr->prev->next = NULL;
        ptr->prev = NULL;
        free(ptr);
    }
}
void deleteNode()
{
    if (start == NULL)
    {
        printf("\t\tList is empty");
        return;
    }
    int ele;
    printf("Enter the element you want to delete : ");
    scanf("%d", &ele);
    node *ptr = start;
    while (ptr->data != ele)
    {
        if (ptr->next == NULL)
        {
            printf("\nElement not found");
            return;
        }
        ptr = ptr->next;
    }
    if (ptr == start)
    {
        delete_front();
    }
    else if (ptr->next == NULL)
    {
        delete_last();
    }
    else
    {
        ptr->next->prev = ptr->prev;
        ptr->prev->next = ptr->next;
        free(ptr);
    }
}
void display()
{

    if (start == NULL)
    {

        printf("\t\tUnderflow");
    }
    else
    {
        node *ptr = start;
        while (ptr != NULL)
        {
            printf("\t%d<=>", ptr->data);
            ptr = ptr->next;
        }
    }
}
int main()
{
    int ch, val, ele;
    while (1)
    {
        printf("\n1.insert in began\n2.insert in end\n3.insert after node");
        printf("\n4.Delete in front\n5.Delete in last\n6.Delete a node");
        printf("\n7.Display\n8.Exit\n");
        printf("Enter your choice : ");
        scanf("%d", &ch);

        switch (ch)
        {
        case 1:
        {
            printf("Enter the  data value : ");
            scanf("%d", &val);
            insert_front(val);
            break;
        }
        case 2:
        {
            printf("Enter the data value : ");
            scanf("%d", &val);
            insert_last(val);
            break;
        }

        case 3:
        {
            insertAfterANode();
            break;
        }

        case 4:
            delete_front();
            break;

        case 5:
            delete_last();
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
            printf("Wrong input mate !!");
            break;
        }
    }
    return 0;
}