# Check if a number is prime or not
import math
a = int(input("Enter a number : "))

def checkIsPrime(num):
    if num < 2:
        return False
    else:
        for i in range(2, int(math.sqrt(num))):
            if(num % i == 0):
                return False
    return True

if checkIsPrime(a):
    print("The number is prime")
else:
    print("The number is not prime")