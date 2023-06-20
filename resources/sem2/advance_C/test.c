#include <stdio.h>

void decimalToBinary(int num)
{
    int binary[32];
    int i = 0;

    // Convert decimal to binary using bit manipulation
    while (num > 0)
    {
        binary[i] = num & 1;
        num >>= 1;
        i++;
    }

    printf("Binary representation: ");

    // Print binary representation in reverse order
    for (int j = i - 1; j >= 0; j--)
    {
        printf("%d", binary[j]);
    }

    printf("\n");
}

void checkEvenOdd(int num)
{
    // Check the least significant bit to determine even/odd
    if ((num & 1) == 0)
    {
        printf("The number is even.\n");
    }
    else
    {
        printf("The number is odd.\n");
    }
}

int main()
{
    int decimalNum;

    printf("Enter a decimal number: ");
    scanf("%d", &decimalNum);

    decimalToBinary(decimalNum);
    checkEvenOdd(decimalNum);

    return 0;
}
