# WAP to print sum of n natural number using for loop

n = int(input("Enter a natural number : "))
sum = 0
for i in range(1,n+1):
    sum+=i
print("The sum is = ", str(sum))

