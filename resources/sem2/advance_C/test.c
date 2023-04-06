#include <stdio.h>
#include <stdlib.h>
int main()
{
   int *ptr1, *ptr2;
   int n, i;

   printf("Enter the number of elements : ");
   scanf("%d", &n);

   // Dynamically allocate memory using malloc()
   ptr1 = (int *)malloc(sizeof(int));

   // Dynamically allocate memory using calloc()
   ptr2 = (int *)calloc(n, sizeof(int));

   // check if the memory has been successfully allocated by calloc or not
   if (ptr1 == NULL || ptr2 == NULL)
   {
      printf("Memory not allocated.\n");
      exit(0);
   }
   else
   {
      printf("Memory successfully allocated using malloc.\n");
      // free ptr1 memory
      free(ptr1);
      printf("Malloc memory successfully freed.\n");

      printf("Memory successfully allocated using calloc.\n");
      // free ptr2 memory
      free(ptr2);
      printf("Calloc memory successfully freed.\n");
   }
   return 0;
}