#include <stdio.h>

int main()
{
   char str1[20];
   printf("Enter a string : ");
   scanf("%s", str1);


   char copyOfStr1[sizeof(str1)/sizeof(char)]; // making another string with same size as the first one.
   int i = 0;
   while(str1[i]!='\0'){
    copyOfStr1[i]=str1[i]; // looping through first string and storing each index value in corresponding index without using strcpy function.
    i++;
   }
   printf(" str2 is %s",copyOfStr1);
   return 0;
}