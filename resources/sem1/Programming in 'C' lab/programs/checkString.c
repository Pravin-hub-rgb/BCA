#include <stdio.h>
#include <string.h>

int main()
{
    int vowel = 0, consotant = 0, character = 0;
    // edge case to work 1- capital letter
    char str[] = "this constant stuff aeiou {}";
    for (int i = 0; i < strlen(str); i++)
    {
        if (str[i] >= 97 && str[i] <= 122)
        {
            switch (str[i])
            {
            case 'a':
                vowel++;
                break;
            case 'e':
                vowel++;
                break;
            case 'i':
                vowel++;
                break;
            case 'o':
                vowel++;
                break;
            case 'u':
                vowel++;
                break;
            default:
                consotant++;
                break;
            }
        }
        else
        {
            printf(" -%c \n", str[i]);
            character++;
        }
    }
    printf("The number of vowels are : %d\n", vowel);
    printf("The number of consotant are : %d\n", consotant);
    printf("The number of characters are : %d\n", character);
    return 0;
}