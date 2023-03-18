#include <stdio.h>

struct Rect
{
    int l, b;
};
struct Tri
{
    int a, b, c;
};
int rectPara(struct Rect);
int triPara(struct Tri);
int main()
{
    struct Rect rectangle1 = {5, 10};
    struct Tri triangle1 = {4, 6, 10};
    printf("The parameter of rectangle is : %d\n", rectPara(rectangle1));
    printf("The parameter of triangle is : %d\n", triPara(triangle1));
    return 0;
}
int rectPara(struct Rect a)
{
    return 2 * (a.l + a.b);
}
int triPara(struct Tri x)
{
    return (x.a + x.b + x.c);
}