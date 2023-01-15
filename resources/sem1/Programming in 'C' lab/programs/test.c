#include <stdio.h>
#define row 3
#define col 3
int main()
{
   int ar[row][col], i, j, n;
   printf("Enter the elements of array\n");
   for (i = 0; i < row; i++)
   {
      for (j = 0; j < col; j++)
      {
         printf("Enter at ar[%d][%d] : ", i, j);
         scanf("%d", &ar[i][j]);
      }
   }
   printf("The elements of array\n");
   for (i = 0; i < row; i++)
   {
      for (j = 0; j < col; j++)
      {
         printf(" %d ", ar[i][j]);
      }
      printf("\n");
   }
   if (row == col)
   {
      printf("The lower triangular matrix\n");
      for (i = 0; i < row; i++)
      {
         for (j = 0; j < col; j++)
         {
            if (j <= i)
            {
               printf(" %d ", ar[i][j]);
            }
         }
         printf("\n");
      }
      printf("The upper triangular matrix\n");
      for (i = 0; i < row; i++)
      {
         for (j = 0; j < col; j++)
         {
            if (j >= i)
            {
               printf("  %d", ar[i][j]);
            }
            else
            {
               printf("   ");
            }
         }
         printf("\n");
      }
   }
   else
      printf("Can't calculate the upper/lower triangle in matrix");
   return 0;
}
