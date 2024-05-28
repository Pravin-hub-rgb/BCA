#include <stdio.h>
void main()
{
    int n, i, j, k;
    float a[10][10], u;
    printf("\n Enter number of unknowns:");
    scanf("%d", &n);
    printf("Enter coefficients:");
    for (i = 0; i < n; i++)
        for (j = 0; j < n + 1; j++)
            scanf("%f", &a[i][j]);
    printf("\n Entered Matrix:\n");
    for (i = 0; i < n; i++)
    {
        for (j = 0; j < n + 1; j++)
        {
            printf("\t%f", a[i][j]);
        }
        printf("\n");
    }

    // Transformation
    for (i = 0; i < n - 1; i++)
        for (j = i + 1; j < n; j++)
        {

            u = a[j][i] / a[i][i];
            for (k = 0; k < n + 1; k++)
                a[j][k] = a[j][k] - u * a[i][k];
        }

    printf("\nUper Triangular Matrix Elements:\n");
    for (i = 0; i < n; i++)
    {
        for (j = 0; j < n + 1; j++)

            printf("%f\t", a[i][j]);
        printf("\n");
    }
}