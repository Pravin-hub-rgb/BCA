mat1 = [[2, 3, 66], [4, 5, 55]]
mat2 = [[2, 2, 54], [3, 3, 33]]
sum = [[0, 0, 0], [0, 0, 0]]

for i in range(len(mat1)):
    for j in range(len(mat1[0])):
        sum[i][j] = mat1[i][j] + mat2[i][j]

print(sum)
