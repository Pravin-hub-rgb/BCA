#include<stdio.h>
long fact(int);
main()
{
    int num;
    printf("Enter a number : ");
    scanf("%d", &num);
    printf("Factorial of %d is %ld\n", num, fact(num));
}
long fact(int n)
{
    if (n == 0)
        return 1;
    else 
        return (n * fact(n-1));
}