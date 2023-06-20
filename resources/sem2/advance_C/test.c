#include <stdio.h>

int main() {
    FILE *sourceFile = fopen("source.txt", "r");
    FILE *destinationFile = fopen("destination.txt", "w");
    
    if (sourceFile == NULL || destinationFile == NULL) {
        printf("Failed to open files.\n");
        return 1;
    }
    
    int ch;
    while ((ch = fgetc(sourceFile)) != EOF) { // The variable 'ch' is updated automatically with each call to fgetc(file) inside the while loop. 
        fputc(ch, destinationFile);
    }
    
    fclose(sourceFile);
    fclose(destinationFile);
    
    printf("Data copied successfully.\n");
    
    return 0;
}
