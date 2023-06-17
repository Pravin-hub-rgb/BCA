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
int main()
{
    int A[] = {11, 13, 7, 12, 16, 9, 24, 5, 10, 3}, n = 10, i;
    quickSort(A, 0, n);
    printf("\nDisplay the sorted array : ");
    for (i = 0; i < n; i++)
    {
        printf("%d ", A[i]);
    }
    return 0;
}