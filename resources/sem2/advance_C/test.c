#include <stdio.h>
int isBitSet(int num, int bitPos)
{
    int mask = 1 << bitPos;
    return ((num & mask) > 0);
}
int main()
{
    int num = 10; // Binary: 0000 1010

    // Check if bit at position 3 is set
    if (isBitSet(num, 3))
        printf("Bit at position 3 is set.\n");
    else
        printf("Bit at position 3 is not set.\n");

    return 0;
}