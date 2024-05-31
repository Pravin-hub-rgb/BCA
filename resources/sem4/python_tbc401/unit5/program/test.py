import pandas as pd
df = pd.read_csv('sample2.csv', index_col=['Roll No.'])
print(df.loc[[2,4,6]])