#include <stdio.h>

int factorial(int num){
    if(num == 0)
    return 1;
    else 
    return num * factorial(num -1);
}

int main()
{
    int num;
    printf("Enter a number for factorial calculations : ");
    scanf("%d", &num);
    
    printf("Factorial = %d",factorial(num));
    return 0;
}