# WAP to find the sum of two matrix using for loop

mat1 = [[1,2],[3,4]]
mat2 = [[2,3],[4,4]]
sum = [[0,0],[0,0]]

for i in range(len(mat1)):
    for j in range(len(mat1[0])):
        sum[i][j] = mat1[i][j] + mat2[i][j]

for r in sum:
    print(r)