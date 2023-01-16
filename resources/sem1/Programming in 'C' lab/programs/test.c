#include <stdio.h>
void printit(char words[])
{
   printf("The words are : %s", words);
}
int main()
{
   char words[20] = "hehe";
   printit(words);
   return 0;
}