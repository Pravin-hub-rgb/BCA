import numpy as np 

n = int(input("Enter the number of element"))

elements = []

for i in range(n):
    element = int(input(f"Enter element {i + 1}: "))
    elements.append(element)

elements_array = np.array(elements)
print(elements_array)
file = open("mydata.txt", "w")
file.write("Name = Henry, Age = 22")
file.close()

file = open("mydata.txt", "r")
content = file.read()
print(content)
file.close()

file = open("mydata.txt", "a")
file.write("\nMy hobby is to do cycling")
file.close()

file = open("mydata.txt", "r")
content = file.read()
print(content)
file.close()
