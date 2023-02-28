#include <stdio.h>
void printArr(int[], int);
int main()
{
    int arr[100] = {0}, size, value, pos;
    printf("Enter the size of the array : ");
    scanf("%d", &size);
    printf("Enter the value you want to insert : ");
    scanf("%d", &value);
    printf("Enter the position : ");
    scanf("%d", &pos);

    printf("Array before insertion : ");
    printArr(arr, size);
    
    // insertion logic
    for (int i = size - 1; i >= pos - 1; i--)
    {
        arr[i + 1] = arr[i];
    }
    arr[pos - 1] = value;
    if (size <= 100)
        size++;
    
    printf("\nArray after insertion : ");
    printArr(arr, size);
    return 0;
}
void printArr(int x[], int size)
{
    for (int i = 0; i < size; i++)
    {
        printf("%d\t", x[i]);
    }
    printf("\n");
}