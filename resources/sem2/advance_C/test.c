#include <stdio.h>
#pragma pack(1)
// space opmitized representation of 'order'
struct order
{
    // isAvailable can store either 0 or 1, so 1 bits are sufficient
    unsigned int isAvailable : 1;

    // isTshirt can store either 0 or 1, so 1 bits are sufficient
    unsigned int isTshirt : 1;
};

int main()
{
    printf("Size of order is %lu byte\n", sizeof(struct order)); // 1
    struct order hoodie = {1, 0};
    printf("The order is %s and it is %s", (hoodie.isAvailable) ? "available" : "not available", (hoodie.isTshirt) ? "T-shirt" : "not T-shirt");
    return 0;
}