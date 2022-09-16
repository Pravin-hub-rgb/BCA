#include <stdio.h>
int main()
{
    int arr[] = {1, 2, 3, 4, 5, 6};

    // just starting from last index and printing from there
    for (int i = sizeof(arr) / sizeof(int) - 1; i > 0; i--)
    {
        printf(" %d ", i);
    }
    return 0;
}