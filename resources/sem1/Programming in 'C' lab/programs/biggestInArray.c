#include <stdio.h>
int main()
{
    int arr[] = {33,44,55,66,66,44,336,66,98};
    int max = arr[0];
    for (int i = 0; i < sizeof(arr)/4; i++)
    {
        if(arr[i]>max){
            max = arr[i];
        }
    }
    printf("The largest number in the array is = %d",max);
    
    return 0;
}