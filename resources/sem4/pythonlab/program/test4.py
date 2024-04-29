def calc(a, b, op):
    if(op == '+'):
        print("Addition is = ", a+b)
    elif(op == '/'):
        if(b == 0):
            print("Division cannot be performed")
            exit(0)
        print("Division is = ", a/b)
    elif(op == '*'):
        print("Multiplication is = ", a * b)
    elif(op == '-'):
        print("Subraction is = ", a-b)
    else:
        print("Enter correct operation")
while(True):
    a = int(input("Enter first number : "))
    b = int(input("Enter second number : "))
    op = input("Enter operation : ")
    calc(a, b, op)
    e = input("Enter 0 to exit and 1 to continue : ")
    if(e == 0):
        print("Exiting...")
        exit(0)