fptr = open("new.txt","w+")
fptr.write("Hello from the other side.")
fptr.seek(0)
print(fptr.read())