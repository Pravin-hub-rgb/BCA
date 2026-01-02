## 1. mean, median, mode, range, average deviation, absolute deviation, score variance, standard deviation
```py
import numpy as np         # NumPy for fast numeric operations
from statistics import mode  # Mode ke liye statistics ka use, kyunki NumPy directly mode nahi deta

# List of student scores
student_scores = [56, 67, 45, 89, 78, 90, 56, 67, 56, 100]

# 1. Mean (Average of all scores)
mean_score = np.mean(student_scores)

# 2. Median (Middle value when sorted)
median_score = np.median(student_scores)

# 3. Mode (Most frequently occurring score)
most_frequent_score = mode(student_scores)

# 4. Range (Difference between highest and lowest scores)
score_range = max(student_scores) - min(student_scores)

# 5. Average Deviation (Mean of absolute differences from the mean)
average_deviation = np.mean([abs(score - mean_score) for score in student_scores])

# 6. Median Absolute Deviation (MAD) from the median
median_absolute_deviation = np.median([abs(score - median_score) for score in student_scores])

# 7. Variance (Average of squared differences from the mean)
score_variance = np.var(student_scores)  # By default, population variance

# 8. Standard Deviation (Square root of the variance)
score_standard_deviation = np.std(student_scores)  # By default, population std deviation

# Print all the results
print(f"Mean: {mean_score}")
print(f"Median: {median_score}")
print(f"Mode: {most_frequent_score}")
print(f"Range: {score_range}")
print(f"Average Deviation (from Mean): {average_deviation}")
print(f"Median Absolute Deviation (MAD): {median_absolute_deviation}")
print(f"Variance (Squared Deviation): {score_variance}")
print(f"Standard Deviation: {score_standard_deviation}")
```
- Understanding `np.mean([abs(score - mean_score) for score in student_scores])`
    - Iska matlab hota hai:
        - “Har score ka mean se difference lo, uska absolute value (positive distance) lo, aur sabka average nikaalo.”
    -  Let's break it into smaller parts:
        1. `for score in student_scores`:  Har score ko list me se ek-ek karke uthate jao.
        2. `score - mean_score`:  Har score me se mean subtract karo – matlab, mean se kitna upar ya neeche hai.
        3. `abs(score - mean_score)`:  Ab difference ka absolute value lo – taaki -ve values bhi +ve ban jaayein.
        4. `[abs(score - mean_score) for score in student_scores]`:  Ye ek list comprehension hai – jo har score ke liye absolute deviation ki list bana deta hai.
            - Jaise: [8.2, 1.2, 12.8, 5.2, 1.8, 10.2, 8.2, 1.2, 8.2, 35.8]
        5. `np.mean(...)`: Ab us list ka average nikaal lo – yehi toh average deviation hai!
    - `[expression for item in list]`
        - yeh Python ka list comprehension hota hai. Yeh beginners ke liye thoda ajeeb lagta hai initially, but jab samajh aa jata hai toh bohot powerful lagta hai.
        - List comprehension ek short cut hota hai for loop + list.append() ka.
            -  Matlab, tum 3–4 lines ke loop ko ek line me likh sakte ho.

## 2. Detect outlier in the following list using the interquartile Range (IQR) method.
Bilkul bhai! Chalo step-by-step dekhte hain kaise **IQR method se outliers detect** karte hain Python mein.

**IQR (Interquartile Range) method** ek standard statistical technique hoti hai outlier detect karne ke liye.

#### 📌 Steps:

1. Sort the data
2. Find **Q1** (25th percentile) and **Q3** (75th percentile)
3. Calculate **IQR = Q3 - Q1**
4. Calculate:

   * **Lower Bound** = Q1 − 1.5 × IQR
   * **Upper Bound** = Q3 + 1.5 × IQR
5. Jo values is range ke bahar hongi → **Outliers**

---

### 🧪 Example Dataset:

```python
data = [10, 12, 14, 15, 18, 21, 22, 23, 24, 26, 28, 100]
```

`100` clearly lag raha hai ki outlier ho sakta hai — let's prove it using code.

---

### ✅ Python Code (with explanation):

```python
import numpy as np

# Step 0: Sample data
data = [10, 12, 14, 15, 18, 21, 22, 23, 24, 26, 28, 100]

# Step 1: Sort the data (IQR method works better with sorted data)
data.sort()

# Step 2: Calculate Q1 and Q3 (25th and 75th percentiles)
q1 = np.percentile(data, 25)
q3 = np.percentile(data, 75)

# Step 3: Calculate IQR
iqr = q3 - q1

# Step 4: Define bounds for outliers
lower_bound = q1 - 1.5 * iqr
upper_bound = q3 + 1.5 * iqr

# Step 5: Find outliers (values outside the bounds)
outliers = [x for x in data if x < lower_bound or x > upper_bound]

# Step 6: Print results
print("Sorted Data:", data)
print("Q1:", q1)
print("Q3:", q3)
print("IQR:", iqr)
print("Lower Bound:", lower_bound)
print("Upper Bound:", upper_bound)
print("Outliers:", outliers)
```

---

### 🧾 Output:

```
Q1 (25th percentile): 14.25
Q3 (75th percentile): 25.0
IQR (Q3 - Q1): 10.75
Lower Bound: -2.875
Upper Bound: 42.125
Outliers: [100]
```
### Understand this `outliers = [x for x in data if x < lower_bound or x > upper_bound]`
- Iska matlab simple hai:
    - Har element x ko data me se uthao,  check karo agar woh lower_bound se chhota ya upper_bound se bada hai,  toh use outliers list me daal do.
- Longer version:
    ```py
    outliers = []

    for x in data:
        if x < lower_bound or x > upper_bound:
            outliers.append(x)
    ```

### ✅ Conclusion:

Jo bhi values **42.125** se zyada ya **-2.875** se kam hoti, woh outlier hoti.
Toh is case mein `100` clearly ek outlier hai.

---

## 3. create two matrices and compute addition, substraction, multiplication, transpose, and compute inverse if possible.
```py
import numpy as np

# Step 1: Create two 2x2 matrices
matrix_A = np.array([[2, 4], [3, 1]])
matrix_B = np.array([[1, 2], [5, 3]])

print("Matrix A:")
print(matrix_A)

print("\nMatrix B:")
print(matrix_B)

# Step 2: Matrix Addition
addition = matrix_A + matrix_B
print("\nAddition (A + B):")
print(addition)

# Step 3: Matrix Subtraction
subtraction = matrix_A - matrix_B
print("\nSubtraction (A - B):")
print(subtraction)

# Step 4: Matrix Multiplication (not element-wise)
multiplication = np.dot(matrix_A, matrix_B)
print("\nMatrix Multiplication (A × B):")
print(multiplication)

# Step 5: Transpose of both matrices
transpose_A = matrix_A.T
transpose_B = matrix_B.T
print("\nTranspose of Matrix A:")
print(transpose_A)

print("\nTranspose of Matrix B:")
print(transpose_B)

# Step 6: Inverse of matrices (if square & invertible)
try:
    inverse_A = np.linalg.inv(matrix_A)
    print("\nInverse of Matrix A:")
    print(inverse_A)
except np.linalg.LinAlgError:
    print("\nMatrix A is not invertible.")

try:
    inverse_B = np.linalg.inv(matrix_B)
    print("\nInverse of Matrix B:")
    print(inverse_B)
except np.linalg.LinAlgError:
    print("\nMatrix B is not invertible.")
```
- Understanding the following code:
    ```py
    try:
        inverse_A = np.linalg.inv(matrix_A)
        print("\nInverse of Matrix A:")
        print(inverse_A)
    except np.linalg.LinAlgError:
        print("\nMatrix A is not invertible.")
    ```
    - `inverse_A = np.linalg.inv(matrix_A)`
        - Yahaan hum NumPy ki `linalg.inv()` function ka use kar rahe hain.
        - Ye function kisi matrix ka inverse nikalta hai.
        - Lekin not all matrices have an inverse.
            - ❗ Inverse sirf square matrix ka hota hai (jaise 2×2, 3×3).
            -  Aur tabhi nikalta hai jab matrix ka determinant ≠ 0 ho.
        - Agar matrix ka inverse exist nahi karta, toh error (exception) throw hoti hai.
        - `linalg` = "Linear Algebra"
        - `np.linalg`: Ye NumPy ka ek module (sub-package) hai jo specifically Linear Algebra operations ke liye banaya gaya hai.


## 4. create a dataframe with column 'Department', 'Employee', 'Salary', Perform group wise opterations.
- find average salary per department
- count no. of employees in each department
```py
import pandas as pd

# Step 1: Create a simple DataFrame
data = {
    'Department': ['HR', 'IT', 'HR', 'Sales', 'IT', 'HR', 'Sales'],
    'Employee': ['Amit', 'Neha', 'Raj', 'Pooja', 'Karan', 'Divya', 'Ankit'],
    'Salary': [40000, 60000, 42000, 50000, 65000, 41000, 52000]
}

df = pd.DataFrame(data)

print(" Original DataFrame:\n")
print(df)

# Step 2: Average salary per department
avg_salary = df.groupby('Department')['Salary'].mean()

print("\n Average Salary per Department:\n")
print(avg_salary)

# Step 3: Count of employees per department
employee_count = df.groupby('Department')['Employee'].count()

print("\n Number of Employees per Department:\n")
print(employee_count)
```
### Breakdown of Key Concepts:
- `pd.DataFrame(data)`: Ye Pandas ka main structure hota hai — jaise ek Excel sheet, jisme rows and columns hote hain.
- `groupby('Department')`: Ye bolta hai: "Data ko Department ke hisaab se group karo".
- `['Salary'].mean()`: Har group (department) ka average nikalta hai, but sirf Salary column ka.
- `['Employee'].count()`: Har group ke andar kitne employees hain, wo count karta hai.

## 5. Create a numpy 4x4 array with values ranging from 0 to 15. Reshape it and perform the following 
- Extract the first two rows
- Extract the last column
- Replace the center 2x2 block with the value 99
```py
import numpy as np

# Step 1: Create an array from 0 to 15 → total 16 elements
array = np.arange(16)

# Step 2: Reshape it into 4x4 matrix
matrix = array.reshape(4, 4)

print("🔹 Original 4x4 Matrix:")
print(matrix)

# Step 3: Extract first 2 rows
first_two_rows = matrix[:2, :]   # row index 0 and 1, all columns
print("\n🔸 First 2 Rows:")
print(first_two_rows)

# Step 4: Extract last column
last_column = matrix[:, -1]     # all rows, last column
print("\n🔸 Last Column:")
print(last_column)

# Step 5: Replace center 2x2 block with 99
# center block = rows 1 and 2 (index 1:3), cols 1 and 2 (index 1:3)
matrix[1:3, 1:3] = 99

print("\n🔸 Matrix After Replacing Center 2x2 Block with 99:")
print(matrix)
```
## 6. Load the following csv data into dataframe and 
- fill missing 'Age' value with the column mean
- Drop rows where 'Score' is missing!!
```py
import pandas as pd
import numpy as np

# Step 1: Simulate CSV data (normally you'd use pd.read_csv("filename.csv"))
data = {
    'Name': ['Amit', 'Neha', 'Ravi', 'Divya', 'Karan'],
    'Age': [25, np.nan, 22, np.nan, 29],
    'Score': [80, 95, np.nan, 70, 88]
}

df = pd.DataFrame(data)

print("🔹 Original DataFrame with Missing Values:\n")
print(df)

# Step 2: Fill missing 'Age' with mean age
mean_age = df['Age'].mean()
df['Age'].fillna(mean_age, inplace=True)

print("\n🔸 After Filling Missing 'Age' with Mean:")
print(df)

# Step 3: Drop rows where 'Score' is missing
df_cleaned = df.dropna(subset=['Score'])

print("\n🔸 After Dropping Rows with Missing 'Score':")
print(df_cleaned)
```