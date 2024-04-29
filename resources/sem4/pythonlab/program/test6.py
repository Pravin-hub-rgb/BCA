myArr = [22, 33, 44, 55, 4, 3]

def meanAndMedian(a):
    sorted(a)
    m = sum(myArr)/len(myArr)
    mdn = myArr[int(len(myArr)/2)-1]
    return m, mdn

mean, median = meanAndMedian(myArr)

print("Mean = ", mean, " and Median = ",median)
