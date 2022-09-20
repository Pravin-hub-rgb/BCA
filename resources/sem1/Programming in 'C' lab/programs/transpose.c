#include <stdio.h>

int main()
{
    int arr[2][3] = {{1, 2, 3}, {4, 5, 6}};
    int transArr[3][2]; // as rows elements becomes column element so we change it
    for (int i = 0; i < 2; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            transArr[j][i] = arr[i][j];
        }
    }
    // priting the transpose
    for(int i = 0 ; i < 3; i++){
        for(int j = 0; j < 2; j++){
            printf(" %d ", transArr[i][j]);
        }
        printf("\n");
    }

    return 0;
}