import numpy as np
mylist=[11, 1, 3, 44, 55, 33]
myarray = np.array([11, 1, 3, 44, 55, 33])

#operation difference
#addition
myaddlist = [1, "hi", "hello", 1.1]
for ele in mylist:
    myaddlist.append(ele*2)
print(myaddlist)
myaddarr = np.array([1, 3, 1.1])
print(myaddarr)
