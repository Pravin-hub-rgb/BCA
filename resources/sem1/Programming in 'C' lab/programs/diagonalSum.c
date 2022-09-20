#include <stdio.h>

int main()
{
    // inputing square matrix from user
    int n;
    printf("Enter no. of rows of a matrix : ");
    scanf("%d", &n);
    int arr[n][n];
    printf("Enter elements of the square matrix : ");
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n; j++)
        {
            scanf("%d", &arr[i][j]);
        }
    }

    // diagonal is where i = j
    int sum = 0;
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n; j++)
        {
            if (i == j)
                sum += arr[i][j];
        }
    }

    printf("The diagonal sum is : %d", sum);
    return 0;
}