# WAP to print sum of n natural number using while loop

n = int(input("Enter a natural number : "))
i = 1
sum = 0
while(i<=n):
 sum+=i
 i=i+1
print("The sum is = ", str(sum))