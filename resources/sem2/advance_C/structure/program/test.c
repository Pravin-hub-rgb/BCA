#include <stdio.h>
#include <stdlib.h>
struct Complex
{
    int real, imag;
} no1, no2, sum;
void enterComp();
void display();
void sumComp();
void sub();
int main()
{
    int option;
    while (1)
    {
        printf("\n\n\t\t\t\t  -_-_-_-_- MENU -_-_-_-_-  \n\n\t\t\t\t1. Input two numbers,\n\t\t\t\t2. Display two numbers,\n\t\t\t\t3. Addition of two complex number,\n\t\t\t\t4. Subtraction of two complex number,\n\t\t\t\t5. Exit\n\n");
        printf("\t\t\t\tEnter your option : ");
        scanf("%d", &option);

        switch (option)
        {
        case 1:
            enterComp();
            break;
        case 2:
            display();
            break;
        case 3:
            sumComp();
            break;
        case 4:
            sub();
            break;
        case 5:
            exit(0);
        default:
            printf("\n\t\t\t\t** ** Enter correct option ** **");
        }
    }
    return 0;
}
void enterComp()
{
    printf("\n\t\t\t\tEnter Real value of first complex number : ");
    scanf("%d", &no1.real);
    printf("\n\t\t\t\tEnter Imaginary value of first complex number : ");
    scanf("%d", &no1.imag);
    printf("\n\t\t\t\tEnter Real value of second complex number : ");
    scanf("%d", &no2.real);
    printf("\n\t\t\t\tEnter Imaginary value of second complex number : ");
    scanf("%d", &no2.imag);
}
void display()
{
    printf("\n\t\t\t\tFirst complex number : %d + %di", no1.real, no1.imag);
    printf("\n\t\t\t\tSecond complex number : %d + %di", no2.real, no2.imag);
}
void sumComp()
{
    printf("\n\t\t\t\tThe sum is %d + %di ", no1.real + no2.real, no1.imag + no2.imag);
}
void sub()
{
    printf("\n\t\t\t\tThe subtraction is %d + %di ", no1.real - no2.real, no1.imag - no2.imag);
}