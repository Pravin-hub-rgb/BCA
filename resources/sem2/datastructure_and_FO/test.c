#include <stdio.h>
#include <stdlib.h>

typedef struct node
{
    struct node *prev;
    int data;
    struct node *next;
} node;
node *start = NULL;
void insertAtFront(int val)
{
    node *temp = (node *)malloc(sizeof(node));
    temp->data = val;
    temp->prev = NULL;
    temp->next = NULL;
    if (start == NULL)
    {
        start = temp;
    }
    else
    {
        temp->next = start;
        start->prev = temp;
        start = temp;
    }
}
void insertAtLast(int val)
{
    node *temp = (node *)malloc(sizeof(node));
    temp->data = val;

    if (start == NULL)
    {
        start = temp;
    }
    else
    {
        node *ptr = start;
        while (ptr->next != NULL)
        {
            ptr = ptr->next;
        }

        temp->prev = ptr;
        ptr->next = temp;
        temp->next = NULL;
    }
}
void insertAfterNode()
{
    if (start == NULL)
    {
        printf("\nList is empty cannot insert after a node\n");
        return;
    }
    int ele, val;
    printf("\nEnter the element after which you want to insert : ");
    scanf("%d", &ele);
    node *ptr = start;
    while (ptr->data != ele)
    {
        if (ptr->next == NULL)
        {
            printf("\n Node not found, cannot insert element\n");
            return;
        }
        ptr = ptr->next;
    }
    node *temp = (node *)malloc(sizeof(node));
    printf("\nEnter the value you want to insert : ");
    scanf("%d", &val);
    temp->data = val;
    temp->next = ptr->next;
    temp->prev = ptr;
    ptr->next->prev = temp;
    ptr->next = temp;
}
void deleteAtFront()
{
    if (start == NULL)
    {
        printf("\n List is empty\n");
        return;
    }
    if (start->next == NULL)
    {
        free(start);
        start = NULL;
    }
    else
    {
        node *ptr = start;
        start = start->next;
        start->prev = NULL;
        free(ptr);
    }
}
void deleteAtLast()
{
    if (start == NULL)
    {
        printf("\n List is empty\n");
        return;
    }
    node *ptr = start;
    while (ptr->next != NULL)
        ptr = ptr->next;
    if (ptr->prev == NULL)
    {
        free(start);
        start = NULL;
    }
    else
    {
        ptr->prev->next = NULL;
        ptr->prev = NULL;
        free(ptr);
    }
}
void deleteANode(int ele)
{
    if (start == NULL)
    {
        printf("\nList is empty\n");
        return;
    }
    node *ptr = start;
    while (ptr->data != ele)
    {
        if (ptr->next == NULL)
        {
            printf("\nElement not found\n");
            return;
        }
        ptr = ptr->next;
    }
    if (ptr->prev == NULL)
    {
        deleteAtFront();
        return;
    }
    else if (ptr->next == NULL)
    {
        deleteAtLast();
        return;
    }
    ptr->next->prev = ptr->prev;
    ptr->prev->next = ptr->next;

    ptr->prev = NULL;
    ptr->next = NULL;
    free(ptr);
}
void display()
{
    if (start == NULL)
    {
        printf("\nList is empty\nÏ");
        return;
    }
    node *ptr = start;
    while (ptr != NULL)
    {
        printf("%d <=> ", ptr->data);
        ptr = ptr->next;
    }
}
int main()
{
    int ch, val, ele;
    while (1)
    {
        printf("\n1.insert in began\n2.insert in end\n3.insert after a node");
        printf("\n4.Delete in front\n5.Delete in last\n6.Delete a");
        printf("\n7.Display\n8.Exit\n");
        printf("Enter your choice : ");
        scanf("%d", &ch);

        switch (ch)
        {
        case 1:
        {
            printf("Enter the  data : ");
            scanf("%d", &val);
            insertAtFront(val);
            break;
        }
        case 2:
        {
            printf("Enter the elment : ");
            scanf("%d", &val);
            insertAtLast(val);
            break;
        }

        case 3:
        {
            insertAfterNode();
            break;
        }

        case 4:
            deleteAtFront();
            break;

        case 5:
            deleteAtLast();
            break;

        case 6:
            printf("Enter the element : ");
            scanf("%d", &ele);
            deleteANode(ele);
            break;

        case 7:
            display();
            break;

        case 8:
            exit(0);

        default:
            printf("You enter wrong input, try again ");
            break;
        }
    }
    return 0;
}