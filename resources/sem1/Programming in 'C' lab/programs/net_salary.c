#include <stdio.h>

int main()
{
    int basic;
    
    printf("Enter your Basic Salary : ");
    scanf("%d", &basic);

    float DA = 0.3 * basic;
    float HRA = 0.15 * basic;
    float IT = 0.2 * basic;
    float PF = 0.05 * basic;
    int CCA = 500;
    int transport = 300;

    float netSalary = (basic + DA + HRA + (float)(CCA)) - IT - PF - (float) (transport);
    printf("Your net salary is %f", netSalary);
    return 0;
}