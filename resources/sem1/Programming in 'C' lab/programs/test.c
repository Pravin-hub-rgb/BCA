#include <stdio.h>
int main()
{
    int arr1[50] = {0}, arr2[50] = {0}, sum[50], n1, n2, max_size;
    printf("Enter the number of element in array one: ");
    scanf("%d", &n1);
    printf("Enter the element in the array.\n");
    for (int i = 0; i < n1; i++)
    {
        printf("Enter element at %d index : ", i);
        scanf("%d", &arr1[i]);
    }
    printf("Enter the number of element in array two: ");
    scanf("%d", &n2);
    printf("Enter the element in the array.\n");
    for (int i = 0; i < n2; i++)
    {
        printf("Enter element at %d index : ", i);
        scanf("%d", &arr2[i]);
    }

    if (n1 > n2)
        max_size = n1;
    else
        max_size = n2;

    for (int i = 0; i < max_size; i++)
    {
        sum[i] = arr1[1] + arr2[i];
    }

    // displaying array
    for (int i = 0; i < max_size; i++)
    {
        printf("%d\t", sum[i]);
    }
    return 0;
}