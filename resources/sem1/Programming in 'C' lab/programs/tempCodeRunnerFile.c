de <stdio.h>

int main()
{

    float fahren, celsius;
    printf("Enter the temperature in Fahrenheit : ");
    scanf("%f", &fahren);

    celsius = ((fahren - 32) * 5) / 9;

    printf("Entered temperature in celsius is : %f", celsius);

    return 0;
}