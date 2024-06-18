import math
n = int(input("Enter n : "))
flag = True
if n < 2:
    print("Not prime")
    exit(0)
else:
    for i in range(2,int(math.sqrt(n)) + 1):
        if(n%i==0):
                flag = False 
                break
if(flag):
    print("Is prime")
else:
    print("Not prime")