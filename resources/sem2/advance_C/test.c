#include <stdio.h>
#include <string.h>
struct student
{
    char name[20];
    int rollNo;
} stu1, stu2, stu3;
int main()
{
    strcpy(stu1.name, "Harry");
    stu1.rollNo = 22;
    return 0;
}