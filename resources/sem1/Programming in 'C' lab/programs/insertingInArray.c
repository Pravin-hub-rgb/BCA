#include <stdio.h>

int main()
{
    int arr[10] = {1, 2, 3, 4, 5, 6, 7};
    int num, index;
    printf("Enter the element which you want to insert in the array : ");
    scanf("%d", &num);
    printf("Enter the index where you want to insert : ");
    scanf("%d", &index);

    // shifting the array
    for (int i = sizeof(arr) / sizeof(int) - 1; i >= index; i--)
    {
        arr[i] = arr[i - 1];
    }

    // inserting in the index
    arr[index] = num;

    // printing the array
    for (int i = 0; i < sizeof(arr) / sizeof(int); i++)
    {
        printf(" %d ", arr[i]);
    }

    return 0;
}