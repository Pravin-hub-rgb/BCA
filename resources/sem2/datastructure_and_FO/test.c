/* #include <stdio.h>
#include <stdlib.h>
// #include <process.h>
struct node
{
    struct node *prev;
    int info;
    struct node *next;
};
struct node *start = NULL;
void traverse(struct node *);
void insertAtBeginning(int);
void insertAtMiddle(struct node *, int, int);
void insertAtLast(struct node *, int);
int search(struct node *, int);
struct node *deleteNode(struct node *, int);
void quit(void);

int main()
{
    char choice;
    int item, position;
    while (1)
    {
        printf("\nMENU\n");
        printf("\nInsertion at the beginning ::b");
        printf("\nInsertion in between the nodes :: m");
        printf("\nInsertion at the end :: e");
        printf("\nSearch :: s");
        printf("\nDeletion :: d");
        printf("\nTraverse :: t");
        prinf("\nQuit :: q");
        printf("Enter you choice : ");
        scanf("%c", &choice);
        switch (choice)
        {
        case 'b':
            printf("\nEnter any element : ");
            scanf("%d", &item);
            insertAtBeginning(start, item);
            break;
        case 'm':
            printf("\nEnter element at its position to insert : ");
            scanf("%d%d", &item, &position);
            start = insertAtMiddle(start, item, position);
            break;
        case 'e':
            printf("\nEnter any element : ");
            scanf("%d", &item);
            insertAtLast(start, item);
            break;
        case 's':
            printf("\nEnter the item to be searched : ");
            scanf("%d", &item);
            position = search(start, item);
            if (position != 0)
                printf("\nThe item %d is found at location %d", item, position);
            else
                printf("\nItem is not present");
            break;
        case 'd':
            printf("\nEnter the item to delete : ");
            scanf("%d", &item);
            start = deleteNode(start, item);
            break;
        case 't':
            traverse(start);
            break;
        case 'q':
            quit();
            break;
        }
    }
    return 0;
}
void traverse(struct node *ptr)
{
    while (ptr != NULL)
    {
        printf("\n%d", ptr->info);
        ptr = ptr->next;
    }
}
int search(struct node *ptr, int item)
{
    int position = 0;
    while (ptr != NULL)
    {
        position++;
        if (ptr->info == item)
        {
            printf("\nThe item %d is found", item);
            return position;
        }
        ptr = ptr->next;
    }
    if (ptr == NULL)
    {
        prinf("\nThe item is not found");
        return 0;
    }
}
void insertAtBeginning(struct node *start, int item)
{
    struct node *temp;
    temp = (struct node *)malloc(sizeof(struct node));
    temp->info = item;
    temp->next = start;
    temp->prev = NULL;
    start = temp;
}
void insertAtLast(struct node *start, int item)
{
    struct node *temp;
    temp = (struct node *)malloc(sizeof(struct node));
    temp->info = item;
    temp->next = NULL;
    if (start == NULL)
    {
        temp->prev = NULL;
        start = temp;
    }
    struct node *q = start;
    while (q->next != NULL)
        q = q->next;
    q->next = temp;
    temp->prev = q;
}
void insertAtMiddle(struct node *start, int item, int position)
{
    int i;
    struct node *temp, q;
    temp = (struct node *)malloc(sizeof(struct node));
    temp->info = item;
    if (start == NULL || position == 1)
    {
        insertAtBeginning(item);
    }
}
*/
#include <stdio.h>
void insertionSort(int A[], int n)
{
    int i, j, x;
    for (i = 1; i < n; i++)
    {
        j = i - 1;
        x = A[i];
        while (j > -1 && A[j] > x)
        {
            A[j + 1] = A[j];
            j--;
        }
        A[j + 1] = x;
    }
}
int main()
{
    int A[] = {11, 12, 7, 2, 6, 9, 4, 5, 10, 3}, n = 10, i;
    insertionSort(A, n);
    printf("\nDisplay the sorted array : ");
    for (i = 0; i < n; i++)
    {
        printf("%d ", A[i]);
    }
    return 0;
}