import pandas as pd

# Creating a sample DataFrame
data = {'Name': ['John', 'Emma', 'Michael', 'Sophia'],
         'Age': [28, 24, 32, 29],
        'City': ['New York', 'San Francisco', 'Los Angeles', 'Houston']}
df = pd.DataFrame(data)
df.to_csv('Dataframe1.csv', index=False)