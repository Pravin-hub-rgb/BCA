import pandas as pd

df = pd.read_csv('sample2.csv')
print(df.loc[5:15, 'Chemistry'])