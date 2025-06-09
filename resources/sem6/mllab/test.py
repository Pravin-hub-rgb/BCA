import numpy as np
from statistics import mode
s=[56,67,45,89,78,90,56,67,56,100]
m=np.mean(s)
d=np.median(s)
o=mode(s)
r=max(s)-min(s)
a=np.mean([abs(x-m) for x in s])
mad=np.median([abs(x-d) for x in s])
v=np.var(s)
sd=np.std(s)
print(f"Mean: {m}")
print(f"Median: {d}")
print(f"Mode: {o}")
print(f"Range: {r}")
print(f"Average Deviation: {a}")
print(f"Absolute Deviation (MAD): {mad}")
print(f"Squared Deviation (Variance): {v}")
print(f"Standard Deviation: {sd}")
