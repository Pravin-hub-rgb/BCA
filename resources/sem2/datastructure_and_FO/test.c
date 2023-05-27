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
void swap(int *a, int *b)
{
    int temp = *a;
    *a = *b;
    *b = temp;
}
int partition(int A[], int l, int h)
{
    int pivot = A[l];
    int i = l, j = h;
    do
    {
        do
        {
            i++;
        } while (A[i] <= pivot);
        do
        {
            j--;
        } while (A[j] > pivot);
        if (i < j)
            swap(&A[i], &A[j]);
    } while (i < j);
    swap(&A[l], &A[j]);
    return j;
}
void quickSort(int A[], int l, int h)
{
    int j;
    if (l < h)
    {
        j = partition(A, l, h);
        quickSort(A, l, j);
        quickSort(A, j + 1, h);
    }
}
void merge(int A[], int l, int mid, int h)
{
    int i = l, j = mid + 1, k = l;
    int B[h+1];
    while(i <= mid && j <= h)
    {
        if(A[i] < A[j])
            B[k++] = A[i++];
        else 
            B[k++] = A[j++];
    }
    for(; i <= mid; i++)
        B[k++] = A[i];
    for(; j <=h; j++)
        B[k++] = A[j];
    
    for(i = l; i <= h; i++) A[i] = B[i];
}
void iMergeSort(int A[], int n)
{
    int p, l, h, mid, i;
    for(p = 2; p <= n; p = p * 2)
    {
        for(i = 0; i + p - 1 < n; i = i + p)
        {
            l = i;
            h = i + p - 1;
            mid = (l + h) / 2;
            merge(A, l, mid, h);
        }
    }
    if(p/2 < n)
    {
        merge(A, 0, p/2 - 1, n);
    }
}
void mergeSort(int A[], int l, int h)
{
    int mid;
    if(l < h)
    {
        mid = ( l + h ) / 2;
        mergeSort(A, l, mid);
        mergeSort(A, mid + 1, h);
        merge(A, l, mid, h);
    }
}
int main()
{
    int A[] = {11, 13, 7, 12, 16, 9, 24, 5, 10, 3}, n = 10, i;
    mergeSort(A, 0, n - 1);
    printf("\nDisplay the sorted array : ");
    for (i = 0; i < n; i++)
    {
        printf("%d ", A[i]);
    }
    return 0;
}
