#include <stdio.h>
int main()
{
    FILE *a, *b, *c, *d;
    a = fopen("up.txt", "w");
    b = fopen("lw.txt", "w");
    c = fopen("dg.txt", "w");
    d = fopen("sp.txt", "w");
    char str[30];
    int i;
    printf("Enter a string : ");
    scanf("%s", str);
    for (i = 0; str[i] != '\0'; i++)
    {
        if (str[i] >= 'A' && str[i] <= 'Z')
            putc(str[i], a);
        else if (str[i] >= 'a' && str[i] <= 'z')
            putc(str[i], b);
        else if (str[i] >= '0' && str[i] <= '9')
            putc(str[i], c);
        else
            putc(str[i], d);
    }
    fclose(a);
    fclose(b);
    fclose(c);
    fclose(d);
    return 0;
}