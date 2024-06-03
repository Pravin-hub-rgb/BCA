import pandas as pd

# Create a dictionary with index labels
data = {'Name': ['Alice', 'Bob', 'Charlie', 'David', 'Emily'],
        'Age': [25, 30, 35, 40, 45],
        'City': ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Dallas']}
index_labels = ['A', 'B', 'C', 'D', 'E']

# Create a pandas DataFrame with index labels
df = pd.DataFrame(data, index=index_labels)

# Display the pandas DataFrame
print("Pandas DataFrame with Index Labels:")
print(df)