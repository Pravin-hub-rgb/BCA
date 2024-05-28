/*
#include <stdio.h>
// void printMat(int A[][], int n)
// {
//     for (i = 0; i < n; i++)
//     {
//         for (j = 0; j < n + 1; j++)
//         {
//             printf("%f\t", A[i][j]);
//         }
//         printf("\n");
//     }
// }
int main()
{
    float A[20][20], u;
    int n, i, j, k;
    float x[4];
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
    // Backsubstituition
    for (i = n; i >= 0; i--)
    {
        float prev = 0;
        for (j = i + 1; j < n; j++)
        {
            prev = prev + A[i][j] * x[j];
        }
        x[i] = A[i][n] - prev / A[i][i];
    }
    for (i = 0; i < 3; i++)
    {
        printf("%f\t", x[i]);
    }
    return 0;
}
*/

// #include <stdio.h>
// int main()
// {
//     int i, j, n;
//     float a[10][10], x[10], u, sum;
//     printf("\n Enter number of unknowns:");
//     scanf("%d", &n);
//     printf("\n Enter [A:B] matrix:");
//     for (i = 0; i < n; i++)
//     {
//         for (j = 0; j < n + 1; j++)
//         {
//             scanf("%f", &a[i][j]);
//         }
//     }

//     printf("\nUper Triangular Matrix Elements:\n");
//     for (i = 0; i < n; i++)
//     {
//         for (j = 0; j < n + 1; j++)
//         {
//             printf("%f\t", a[i][j]);
//         }
//         printf("\n");
//     }

//     for (i = n - 1; i >= 0; i--)
//     {
//         sum = 0;
//         for (j = i + 1; j < n; j++)
//             sum = sum + a[i][j] * x[j]; /* Performing Back Substitution*/
//         x[i] = (a[i][n] - sum) / (float)a[i][i];
//     }
//     printf("\n Solution values are:");
//     for (i = 0; i < n; i++)
//         printf("%f\n", x[i]);
//     return 0;
// }

#include <stdio.h>

int main()
{
    int i, j, k, n;
    float a[10][10], x[10], u, sum;

    printf("\nEnter number of unknowns: ");
    scanf("%d", &n);

    printf("\nEnter [A:B] matrix:\n");
    for (i = 0; i < n; i++)
    {
        for (j = 0; j < n + 1; j++)
        {
            scanf("%f", &a[i][j]);
        }
    }

    // Transform to upper triangular matrix
    for (i = 0; i < n - 1; i++)
    {
        for (j = i + 1; j < n; j++)
        {
            u = a[j][i] / a[i][i];
            for (k = 0; k < n + 1; k++)
            {
                a[j][k] = a[j][k] - u * a[i][k];
            }
        }
    }

    printf("\nUpper Triangular Matrix Elements:\n");
    for (i = 0; i < n; i++)
    {
        for (j = 0; j < n + 1; j++)
        {
            printf("%f\t", a[i][j]);
        }
        printf("\n");
    }

    // Back substitution
    for (i = n - 1; i >= 0; i--)
    {
        sum = 0;
        for (j = i + 1; j < n; j++)
        {
            sum += a[i][j] * x[j]; /* Performing Back Substitution */
        }
        x[i] = (a[i][n] - sum) / a[i][i];
    }

    printf("\nSolution values are:\n");
    for (i = 0; i < n; i++)
    {
        printf("%f\n", x[i]);
    }

    return 0;
}
