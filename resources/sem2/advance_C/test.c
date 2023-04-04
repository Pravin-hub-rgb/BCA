#include <stdio.h>
#include <stdlib.h>

int main()
{
   // use of malloc
   int *ptr;
   int n;
   printf("Enter the size of the array you want to create : ");
   scanf("%d", &n);
   ptr = (int *)malloc(n * sizeof(int)); // create dynamic array of 10 size

   // Check if the memory has been successfully allocated by malloc or not
   if (ptr == NULL)
   {
      printf("Memory not allocated.\n");
      exit(0);
   }
   else
   {
      for (int i = 0; i < n; i++)
      {
         printf("Enter the value no %d of this : ", i);
         scanf("%d", &ptr[i]);
      }

      for (int i = 0; i < n; i++)
      {
         printf("The value %d of this array is %d\n", i, ptr[i]);
      }
   }
   return 0;
}