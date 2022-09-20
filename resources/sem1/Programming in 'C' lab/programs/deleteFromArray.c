#include <stdio.h>

int main()
{
    int arr[10] = {1, 2, 3, 4, 5, 6, 7};
    int num;
    printf("Enter a number which you want to delete : ");
    scanf("%d", &num);

    // checking if the number is present in the array only then we will be able to delete it.
    // also finding its index
    int isAvail = 0, index = -1;
    for (int i = 0; i < sizeof(arr) / sizeof(int) - 1; i++)
    {
        index++;
        if (num == arr[i])
        {
            isAvail = 1;
            break;
        }
    }
    if (isAvail)
    {
        printf("Deleteing in process....\n");
        printf("Index of the element is : %d\n", index);
    }
    else
        printf("Number not present \n");

    // deletion logic
    // here we just shift all the element to left from the index of the deleting element
    for (int i = index; i < sizeof(arr) / sizeof(int) - 1; i++)
    {
        arr[i]=arr[i+1];
    }

    // printing the array
    for (int i = 0; i < sizeof(arr) / sizeof(int) - 1; i++)
    {
        printf(" %d ", arr[i]);
    }
    printf("\n");
    return 0;
}