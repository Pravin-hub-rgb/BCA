import pandas as pd

# Creating a dictionary
data = {
    'Name': ['John', 'Alice', 'Bob', 'Eve'],
    'Age': [28, 24, 22, 26],
    'City': ['New York', 'San Francisco', 'Los Angeles', 'Seattle']
}

# Creating a DataFrame from the dictionary
df = pd.DataFrame(data)

# Displaying the DataFrame
print("Original DataFrame:")
print(df)