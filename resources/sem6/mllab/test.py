import numpy as np 

n = int(input("Enter the number of element"))

elements = []

for i in range(n):
    element = int(input(f"Enter element {i + 1}: "))
    elements.append(element)

elements_array = np.array(elements)
print(elements_array)