import pandas as pd
df = pd.read_csv('sample.csv')
df2 = df.fillna({'Physics': 'none', 'Chemistry': 0, 'Maths': 30})
print(df2)