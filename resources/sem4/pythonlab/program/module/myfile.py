import mymodule
import numpy as np
arr1 = np.array([[1,2,3],[3,3,3],[0,0,0]])
arr2 = np.array([[1,2,3],[3,3,3],[0,0,0]])

sum = mymodule.sum_array(arr1, arr2)
print(sum)