#include <stdio.h>
// Function to set a specific bit
int setBit(int num, int bitPos)
{
    return num | (1 << bitPos);
}
int main()
{
    int num = 10; // Binary: 0000 1010

    // Set bit at position 2
    num = setBit(num, 2);
    printf("After setting bit at position 2: %d\n", num);
    
    return 0;
}