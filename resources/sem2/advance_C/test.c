#include <stdio.h>
#include <stdlib.h>
struct node
{
    struct node *prev;
    int data;
    struct node *next;
};
struct node *head = NULL, *ptr;
void insert_front(int val)
{
    struct node *temp = (struct node *)malloc(sizeof(struct node));
    temp->data = val;
    temp->prev = NULL;
    temp->next = NULL;
    if (head == NULL)
    {
        head = temp;
    }
    else
    {
        temp->next = head;
        head->prev = temp;
        head = temp;
    }
}
void insert_last(int val)
{
    struct node *temp = (struct node *)malloc(sizeof(struct node));
    temp->data = val;

    if (head == NULL)
    {
        head = temp;
    }
    else
    {
        ptr = head;
        while (ptr->next != NULL)
        {
            ptr = ptr->next;
        }

        temp->prev = ptr;
        ptr->next = temp;
        temp->next = NULL;
    }
}
void insert_middle(int val, int ele)
{
    struct node *temp = (struct node *)malloc(sizeof(struct node));
    temp->data = val;

    if (head == NULL)
    {
        head = temp;
    }
    else
    {
        ptr = head;
        while (ptr->data != ele)
        {
            ptr = ptr->next;
            if (ptr->next == NULL)
            {
                printf("\n Not a middle element");
                return;
            }
        }
        temp->next = ptr->next;
        temp->prev = ptr;
        ptr->next->prev = temp;
        ptr->next = temp;
    }
}
void delete_front()
{
    if (head == NULL)
    {
        printf("\t\tUnderflow");
        return;
    }
    if (head->next == NULL)
        head = NULL;
    else
    {
        ptr = head;
        head = head->next;
        ptr->next = NULL;
        head->prev = NULL;
        free(ptr);
    }
}
void delete_last()
{

    if (head == NULL)
    {
        printf("\t\tUnderflow");
        return;
    }
    ptr = head;
    while (ptr->next != NULL)
    {
        ptr = ptr->next;
    }
    if (ptr->prev == NULL)
        head = NULL;
    else
    {
        ptr->prev->next = NULL;
        ptr->prev = NULL;
        free(ptr);
    }
}
void delete_middle(int ele)
{
    if (head == NULL)
    {
        printf("\t\tUnderflow");
    }
    else
    {
        ptr = head;
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

    if (head == NULL)
    {

        printf("\t\tUnderflow");
    }
    else
    {
        ptr = head;
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
        printf("\t\t---------JAY GOLU DEVTA---------........\n");
        printf("\n1.insert in began\n2.insert in end\n3.insert in miidle");
        printf("\n4.Delete in front\n5.Delete in last\n6.Delete in middle");
        printf("\n7.Display\n8.Exit\n");
        printf("Enter your choice=");
        scanf("%d", &ch);

        switch (ch)
        {
        case 1:
        {
            printf("Enter the  data=");
            scanf("%d", &val);
            insert_front(val);
            break;
        }
        case 2:
        {
            printf("Enter the elment=");
            scanf("%d", &val);
            insert_last(val);
            break;
        }

        case 3:
        {
            printf("Enter the element=");
            scanf("%d", &val);
            printf("Enter the element after which you insert new element=");
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
            printf("Enter the element=");
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