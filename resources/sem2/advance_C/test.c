#include <stdio.h>
#include <string.h>

int main()
{
    char str1[100];

    printf("Enter the first string: ");
    fgets(str1, strlen(str1), stdin);
    strupr(str1);

    printf("Upper case string is : %s\n", str1);

    return 0;
}
