# print prime number between range
import math

def checkIsPrime(num):
    if num < 2:
        return False
    else:
        for i in range(2, int(math.sqrt(num))):
            if(num % i == 0):
                return False
    return True

def printPrime(x, y):
    for i in range(x+1, y-1):
        if(checkIsPrime(i)):
            print(i)
    
lowerRange = int(input("Enter lower range : "))
upperRange = int(input("Enter upper range : "))

printPrime(lowerRange, upperRange)