#include <stdio.h>
#include <stdlib.h>
typedef struct node
{
    struct node *prev;
    int data;
    struct node *next;
} node;
node *start = NULL;
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

void insertAtFront(int val)
{
    node *n = (node *)malloc(sizeof(node));
    n->prev = NULL;
    n->data = val;
    n->next = start;
    if (start != NULL)
    {
        start->prev = n;
    }
    start = n;
}
void insertAtBack(int val)
{
    if (start == NULL)
    {
        insertAtFront(val);
        return;
    }
    node *n = (node *)malloc(sizeof(node));
    n->data = val;
    n->next = NULL;
    n->prev = NULL;
    node *temp = start;
    while (temp->next != NULL)
        temp = temp->next;
    temp->next = n;
    n->prev = temp;
}
void deleteAtFront()
{
    node *toDelete = start;
    if(start->next == NULL)
    {
        start = NULL;
        free(toDelete);
    }
    start = start->next;
    start->prev = NULL;
    free(toDelete);
}
void deleteAtLast()
{
    if (start == NULL)
    {
        printf("\nList is empty\n");
        return;
    }
    node *last = start;
    while (last->next != NULL)
        last = last->next;
    if (start == last)
        start = NULL;
    if (last->prev != NULL)
        last->prev->next = NULL;
    free(last);
}
void deletion(int pos)
{
    if (pos < 0 || pos > length(start))
    {
        printf("\ninvalid position\n");
        return;
    }
    if (pos == 1)
    {
        deleteAtFront();
        return;
    }
    node *temp = start;
    int count = 1;
    while (temp != NULL && count != pos)
    {
        temp = temp->next;
        count++;
    }
    temp->prev->next = temp->next;
    if (temp->next != NULL)
        temp->next->prev = temp->prev;
    free(temp);
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
int main()
{
    int choice, pos, data;
    while (1)
    {
        printf("\n------- MENU Doubly Linked List ---------");
        printf("\n1. Insert at front");
        printf("\n2. Insert at back");
        printf("\n3. delete at front");
        printf("\n4. delete at back");
        printf("\n5. Delete at position");
        printf("\n6. Display");
        printf("\n7. Exit");
        printf("\nEnter you choice : ");
        scanf("%d", &choice);
        switch (choice)
        {
        case 1:
            printf("\nEnter the value you want to insert : ");
            scanf("%d", &data);
            insertAtFront(data);
            break;
        case 2:
            printf("\nEnter the value you want to insert : ");
            scanf("%d", &data);
            insertAtBack(data);
            break;
        case 3:
            deleteAtFront();
            break;
        case 4:
            deleteAtLast();
            break;
        case 5:
            printf("\nEnter the position you want to delete : ");
            scanf("%d", &pos);
            deletion(pos);
            break;
        // case 5:
        //     deleteAtEnd();
        //     break;
        // case 6:
        //     printf("\nEnter the pos where you want to delete : ");
        //     scanf("%d", &pos);
        //     deleteAtPos(start, pos);
        //     break;
        case 6:
            display();
            break;
        case 7:
            exit(0);
        default:
            printf("\nEnter a correct choice");
        }
    }
    return 0;
}