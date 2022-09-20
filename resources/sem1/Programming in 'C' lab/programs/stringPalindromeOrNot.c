#include <stdio.h>
#include <string.h>

int main()
{
    char str[30];
    printf("Enter a string : ");
    scanf("%s", str);

    // using two pointer method
    // finding the null character
    int j = 0;
    while (str[j] != '\0')
        j++; // j will points to the last +1
    j--;
    // here we could use strlen function for finding the length of string
    // printf("The strlen = %lu", strlen(str));

    int i = 0;       // 'i' pointing to first index and 'j' is pointing to last index
    int isPalin = 1; // assuming that it is palindrome
    while (i != j)
    {
        if (str[i] != str[j])
        {
            isPalin = 0; // correcting
            break;
        }
        i++;
        j--;
    }
    if (isPalin)
        printf("The entered string is palindrome");
    else
        printf("The entered string is not palindrome");
    return 0;
}