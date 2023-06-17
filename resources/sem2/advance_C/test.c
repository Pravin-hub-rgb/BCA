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
        newNode->next = NULL;
    }
}
void insert_middle(int val, int ele)
{
    node *newNode = (node *)malloc(sizeof(node));
    newNode->data = val;

    if (start == NULL)
    {
        start = newNode;
    }
    else
    {
        node *ptr = start;
        while (ptr->data != ele)
        {
            ptr = ptr->next;
            if (ptr->next == NULL)
            {
                printf("\n Not a middle element");
                return;
            }
        }
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
void delete_middle(int ele)
{
    if (start == NULL)
    {
        printf("\t\tUnderflow");
    }
    else
    {
        node *ptr = start;
        while (ptr->data != ele)
        {

            ptr = ptr->next;
        }
        if (ptr->prev == NULL || ptr->next == NULL)
        {
            printf("Not a middle element");
            return;
        }
        ptr->next->prev = ptr->prev;
        ptr->prev->next = ptr->next;

        ptr->prev = NULL;
        ptr->next = NULL;
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
        printf("\n1.insert in began\n2.insert in end\n3.insert in middle");
        printf("\n4.Delete in front\n5.Delete in last\n6.Delete in middle");
        printf("\n7.Display\n8.Exit\n");
        printf("Enter your choice : ");
        scanf("%d", &ch);

        switch (ch)
        {
        case 1:
        {
            printf("Enter the  data : ");
            scanf("%d", &val);
            insert_front(val);
            break;
        }
        case 2:
        {
            printf("Enter the elment : ");
            scanf("%d", &val);
            insert_last(val);
            break;
        }

        case 3:
        {
            printf("Enter the element : ");
            scanf("%d", &val);
            printf("Enter the element after which you insert new element : ");
            scanf("%d", &ele);
            insert_middle(val, ele);
            break;
        }

        case 4:
            delete_front();
            break;

        case 5:
            delete_last();
            break;

        case 6:
            printf("Enter the element : ");
            scanf("%d", &ele);
            delete_middle(ele);
            break;

        case 7:
            display();
            break;

        case 8:
            exit(0);

        default:
            printf("You enter wrong input");
            break;
        }
    }
    return 0;
}