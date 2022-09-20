#include <stdio.h>

int main()
{
    char str[20];
    printf("Enter a string : ");
    scanf("%s", str);
    
    int i = 0;
    while (str[i] != '\0')
        i++;

    printf("The string you entered has %d characters", i);
    return 0;
}