
import matplotlib.pyplot as plt

# Predefined data sets
data1 = [10, 20, 30, 40, 50]
data2 = [15, 25, 35, 45, 55]
data3 = [5, 15, 25, 35, 45]

plt.boxplot([data1, data2, data3], labels=['Data 1', 'Data 2', 'Data 3'])
plt.xlabel('Data Sets')
plt.ylabel('Values')
plt.title('Multiple Box Plots Example')
plt.show()
              