#include <stdio.h>
struct student
{
   int rollNo;
   char section;
   char name[20];
};

int main()
{
   struct student s1 = {22, 'D', "Harry"};
   struct student *ptr1, **ptr2;
   ptr1 = &s1;
   ptr2 = &ptr1;
   (*ptr1).rollNo = 25;
   printf("The roll no is %d", (*ptr1).rollNo);
   printf("\nThe name is %s",(**ptr2).name);
   printf("The roll no is %d", ptr1->rollNo);
   printf("\nThe name is %s", (*ptr2)->name);
   return 0;
}