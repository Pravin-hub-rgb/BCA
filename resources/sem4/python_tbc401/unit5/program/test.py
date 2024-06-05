
import pandas as pd

# Loading and reading the original DataFrame
sharad = pd.read_csv('dirtydata.csv')

# Discovering duplicate values
print(sharad.duplicated())