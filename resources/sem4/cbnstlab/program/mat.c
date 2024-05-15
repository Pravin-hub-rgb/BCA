#include <stdio.h>
int main()
{
    float A[20][20], u;
    int n, i, j, k;
    printf("Enter the number of unknowns : ");
    scanf("%d", &n);
    printf("Enter coefficients of the equations : \n");
    for (i = 0; i < n; i++)
    {
        for (j = 0; j < n + 1; j++)
        {
            scanf("%f", &A[i][j]);
        }
    }
    printf("Printing the Augumented matrix [A|B] : \n");
    for (i = 0; i < n; i++)
    {
        for (j = 0; j < n + 1; j++)
        {
            printf("%f\t", A[i][j]);
        }
        printf("\n");
    }
    // calculating
    for (i = 0; i < n - 1; i++)
    {
        for (j = i + 1; j < n; j++)
        {
            u = A[j][i] / A[i][i];
            for (k = 0; k < n + 1; k++)
            {
                A[j][k] = A[j][k] - u * A[i][k];
            }
        }
    }
    printf("Printing the Augumented matrix [A|B] : \n");
    for (i = 0; i < n; i++)
    {
        for (j = 0; j < n + 1; j++)
        {
            printf("%f\t", A[i][j]);
        }
        printf("\n");
    }
    return 0;
}