#include <stdio.h>

int main()
{
    int aRows, aColumns, bRows, bColumns;
    printf("Enter no. of rows and columns of first matrix : ");
    scanf("%d %d", &aRows, &aColumns);
    int a[aRows][aColumns];
    printf("Enter the elements of the first matrix a : ");
    for (int i = 0; i < aRows; i++)
    {
        for (int j = 0; j < aColumns; j++)
        {
            scanf("%d", &a[i][j]);
        }
    }

    printf("Enter no. of rows and columns of matrix b : ");
    scanf("%d %d", &bRows, &bColumns);
    int b[aRows][aColumns];

    // for martix multiplication the no. of columns of first matrix should be equal to the rows of second matrix.
    if (aColumns != bRows)
        printf("Cannot multiply matrix");
    else
    {
        printf("Enter the elements of the matrix b : ");
        for (int i = 0; i < bRows; i++)
        {
            for (int j = 0; j < bColumns; j++)
            {
                scanf("%d", &b[i][j]);
            }
        }
    }

    // multiplication of matrices
    int product[aRows][bColumns];
    int sum = 0;
    for (int i = 0; i < aRows; i++)
    {
        for (int j = 0; j < bRows; j++)
        {
            for (int k = 0; k < bRows; k++)
            {
                sum += a[i][k] * b[k][j];
            }
            product[i][j] = sum;
            sum = 0;
        }
    }

    // printing the resultant matrix
    printf("Resultant Matrix : \n");
    for (int i = 0; i < aRows; i++)
    {
        for (int j = 0; j < bColumns; j++)
        {
            printf(" %d ", product[i][j]);
        }
        printf("\n");
    }
    return 0;
}