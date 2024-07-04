# calculator.py
import numpy as np
def sum_array(a1, a2):
    m=np.arange(1,10)
    m=m.reshape(3,3)
    for i in range(len(a1)):
        for j in range(len(a1[0])):
            m[i][j] = a1[i][j] + a2[i][j]
    return m