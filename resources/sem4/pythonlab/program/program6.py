# WAP to print the following pattern
# 1
# 2 2
# 3 3 3
# 4 4 4 4
# 5 5 5 5 5

for i in range(5):
    for j in range(i+1):
        print(i+1, end=' ')
    print('')
    
for i in range(1,6):
    for j in range(0,i):
            print(i, end=' ')
    print('')