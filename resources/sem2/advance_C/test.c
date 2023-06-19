#include <stdio.h>
struct date
{
    int d, m, y;
};
struct employee
{
    int id;
    struct date dob;
    struct date doj;
} e1;
int main()
{
    printf("Enter id of a employee : ");
    scanf("%d", &e1.id);
    printf("Enter date of birth : ");
    scanf("%d%d%d", &e1.dob.d, &e1.dob.m, &e1.dob.y);
    printf("Enter date of joining : ");
    scanf("%d%d%d", &e1.doj.d, &e1.doj.m, &e1.doj.y);

    printf("ID: %d, DOB: %d/ %d/ %d and DOJ: %d/ %d/ %d", e1.id, e1.dob.d, e1.dob.m, e1.dob.y, e1.doj.d, e1.doj.m, e1.doj.y);
    return 0;
}