# finding smallest and largest number in a list
myList = [22,54,2,54,33,44]
smallest = myList[0]
largest = myList[0]
for i in range(len(myList)):
    if myList[i] < smallest:
        smallest = myList[i]
    if myList[i] > largest:
        largest = myList[i]

print("Largest is = ", largest)
print("Smallest is = ", smallest)