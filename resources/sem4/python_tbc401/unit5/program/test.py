import matplotlib.pyplot as plt

data = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

plt.boxplot(data)
plt.xlabel('Data')
plt.ylabel('Values')
plt.title('Box Plot Example')
plt.show()