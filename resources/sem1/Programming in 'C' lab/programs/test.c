#include <stdio.h>

int main()
{
   int arr[10], n, search, flag = 0;
   printf("Enter the number of element in array : ");
   scanf("%d", &n);
   printf("Enter the element in the array.\n");
   for (int i = 0; i < n; i++)
   {
      printf("Enter element at %d index : ", i);
      scanf("%d", &arr[i]);
   }
   printf("Enter the element you want to search : ");
   scanf("%d", &search);

   for (int i = 0; i < n; i++)
   {
      if (arr[i] == search)
      {
         flag = 1;
         break;
      }
   }
   if (flag==1)
   {
      printf("%d is present\n", search);
   }
   else
   {
      printf("%d is not present\n", search);
   }

   return 0;
}