#include <stdio.h>
#include <stdlib.h>
int insertion(int[], int);
void display(int[], int);
int deletion(int[], int);
int search(int[], int, int);
void merge(int[], int);
int main()
{
    int arr[100] = {0}, arr2[100] = {0}, size = 10, userChoice, pos, val;
    while (1)
    {
        printf("\n---- MENU ----");
        printf("\n1. Insertion");
        printf("\n2. Deletion");
        printf("\n3. Display");
        printf("\n4. Searching");
        printf("\n5. Merge");
        printf("\n6. Exit");
        printf("\nEnter your choice : ");
        scanf("%d", &userChoice);

        switch (userChoice)
        {
        case 1:
            size = insertion(arr, size);
            break;
        case 2:
            size = deletion(arr, size);
            break;
        case 3:
            display(arr, size);
            break;
        case 4:
            printf("Enter the number you want to search : ");
            scanf("%d", &val);
            pos = search(arr, size, val);
            if (pos >= 0)
                printf("Found at %d position", pos + 1);
            else
                printf("Element not found");
            break;
        case 5:
            merge(arr, size);
            break;
        case 6:
            exit(0);
        default:
            printf("\nEnter correct choice");
        }
    }
    return 0;
}
int insertion(int a[], int s)
{
    int val, pos, i;
    printf("Enter the value you wan to insert : ");
    scanf("%d", &val);
    printf("Enter the position : ");
    scanf("%d", &pos);
    for (i = s - 1; i > pos - 1; i--)
    {
        a[i + 1] = a[i];
    }
    a[pos - 1] = val;
    return (s + 1);
}
int deletion(int a[], int s)
{
    int i, val, flag = 0, pos;
    printf("Enter the value you want to delete : ");
    scanf("%d", &val);
    pos = search(a, s, val);
    if (pos >= 0)
    {
        for (i = pos; i < s - 1; i++)
        {
            a[i] = a[i + 1];
        }
        if (s > 0)
            s--;
    }
    else
        printf("Element not found : Deletion cannot be performed ");
    return s;
}
void display(int a[], int s)
{
    int i;
    for (i = 0; i < s; i++)
    {
        printf("\t%d", a[i]);
    }
}
int search(int a[], int s, int val)
{
    int i;
    for (i = 0; i < s; i++)
    {
        if (a[i] == val)
        {
            return i;
        }
    }
    return -1;
}
void merge(int a[], int s)
{
    int s2, arr2[100], mer[100], i, k, j = 0;
    printf("Enter size of second array : ");
    scanf("%d", &s2);
    printf("Enter elements of array - ");
    for (i = 0; i < s2; i++)
    {
        scanf("%d", &arr2[i]);
    }
    i = 0;
    for (k = 0; k < s + s2; k++)
    {
        if (i < s)
        {
            mer[k] = a[i];
            i++;
        }
        else
        {
            mer[k] = arr2[j];
            j++;
        }
    }
    display(mer, s + s2);
}