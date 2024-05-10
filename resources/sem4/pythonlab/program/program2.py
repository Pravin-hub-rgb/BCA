import functools
# to demonstrate the use of filter, map and reduce function
my_list = [2,4,5,6,7,8]
even_list = list(filter(lambda x : x % 2 == 0, my_list))
print("Even number from the list are : ", even_list)

# doubling the list elements using map function

double_list = list(map(lambda x : x*x, my_list))
print("Doubling the list element : ", double_list)

# sum of all element in a list

sum = functools.reduce(lambda x, y: x + y, my_list)
print("The sum of list is = ",sum)