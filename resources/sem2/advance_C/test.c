#include <stdio.h>
#include <string.h>
int main()
{
    char x[12];
    char temp;
    int i, l;

    printf("Enter the string =");
    fgets(x, 12, stdin);
    l = strlen(x);
    for (i = 0; i < l / 2; i++)
    {
        temp = x[i];
        x[i] = x[l - i - 1];
        x[l - i - 1] = temp;
    }
    printf("%s", x);

    return 0;
}