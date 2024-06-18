import numpy as np

# Create a NumPy array with elements from 1 to 10
array = np.arange(1, 11)

# Replace all even numbers with 0
for i in array:
    if array[i]%2==0:
        array[i] = 0

print("Modified array:", array)