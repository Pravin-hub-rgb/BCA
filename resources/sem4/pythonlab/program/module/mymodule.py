def areaOfSquare(side):
    return side * side

def calculator(x,y,op):
    if(op == '+'):
        print("Sum is = ", x + y)
    elif(op == '-'):
        print("Sub is = ", x - y)
    elif(op == '*'):
        print("Multiplication is = ", x * y)
    elif(op == '/'):
        print("Division is = ", x / y)