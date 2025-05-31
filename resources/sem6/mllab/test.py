file = open("mydata.txt", "w")
file.write("Name = Henry, Age = 22")
file.close()

file = open("mydata.txt", "r")
content = file.read()
print(content)
file.close()

file = open("mydata.txt", "a")
file.write("\nMy hobby is to do cycling")
file.close()

file = open("mydata.txt", "r")
content = file.read()
print(content)
file.close()