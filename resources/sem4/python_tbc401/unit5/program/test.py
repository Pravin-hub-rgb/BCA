import pandas as pd
df = pd.read_csv('sample.csv')
df2 = df.fillna(method='ffill')
print(df2)