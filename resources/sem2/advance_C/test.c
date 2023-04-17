#include <stdio.h>
int main()
{
    int a = 5, *pi = &a;
    char b = 'x', *pc = &b;
    float c = 5.5, *pf = &c;
    printf("Value of pi = %d  Address of a = %lu\n", *pi, (unsigned long)pi);
    printf("Value of pc = %c  Address of b = %lu\n", *pc, (unsigned long)pc);
    printf("Value of pf = %.1f  Address of c = %lu\n", *pf, (unsigned long)pf);

    // Incrementing pointers using pointer arithmetic
    pi++;
    pc++;
    pf++;

    printf("After incrementing:\n");
    printf("Modified address of a = %lu\n", (unsigned long)pi);
    printf("Modified address of b = %lu\n", (unsigned long)pc);
    printf("Modified address of c = %lu\n", (unsigned long)pf);

    // Decrementing pointers using pointer arithmetic
    pi--;
    pc--;
    pf--;

    printf("After decrementing:\n");
    printf("Modified address of a = %lu\n", (unsigned long)pi);
    printf("Modified address of b = %lu\n", (unsigned long)pc);
    printf("Modified address of c = %lu\n", (unsigned long)pf);

    // Adding a constant value to pointers
    pi += 2;
    pc += 2;
    pf += 2;

    printf("After adding 2:\n");
    printf("Modified address of a = %lu\n", (unsigned long)pi);
    printf("Modified address of b = %lu\n", (unsigned long)pc);
    printf("Modified address of c = %lu\n", (unsigned long)pf);

    // Subtracting a constant value from pointers
    pi -= 2;
    pc -= 2;
    pf -= 2;

    printf("After subtracting 2:\n");
    printf("Modified address of a = %lu\n", (unsigned long)pi);
    printf("Modified address of b = %lu\n", (unsigned long)pc);
    printf("Modified address of c = %lu\n", (unsigned long)pf);

    return 0;
}
