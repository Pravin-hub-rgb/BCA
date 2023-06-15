#include <stdio.h>
#include <string.h>

void modifyString(char* str) {
    // Appending " (Modified)" to the string
    strcat(str, " Happy Coding");
}

int main() {
    char message[50] = "Hello, World!";
    printf("Before modification: %s\n", message);
    
    modifyString(message);
    
    printf("After modification: %s\n", message);
    
    return 0;
}
