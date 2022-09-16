#include <stdio.h>
int main()
{
    int arr[] = {33, 44, 55, 33, 8, 100};
    int min = arr[0];
    for (int i = 0; i < sizeof(arr) / sizeof(int); i++)
    {
        if(arr[i]<min){
            min = arr[i];
        }
    }
    printf("The smallest number in the array is = %d", min);

    return 0;
}