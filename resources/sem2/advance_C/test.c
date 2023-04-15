
#include <stdio.h>
#include <string.h>
int main()
{
    char name[20] = "Harry";
    int start = 0;
    int end = strlen(name) - 1;
    while (start < end)
    {
        char temp = name[start];
        name[start] = name[end];
        name[end] = temp;
        start++;
        end--;
    }
    printf("The mutated string is = %s", name);
    return 0;
}