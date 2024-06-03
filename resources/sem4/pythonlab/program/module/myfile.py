import mymodule

def getValues():
    num1 = int(input("Enter first number: "))
    num2 = int(input("Enter second number: "))
    return num1, num2

while True:
    operator = int(input("** MENU ** \n1. For addition \n2. For subtraction \n3. For multiplication \n4. For division \n5. Exit: "))

    if operator in [1, 2, 3, 4]:
        num1, num2 = getValues()

        if operator == 1:
            print(f"The addition is = {mymodule.addition(num1, num2)}")
        elif operator == 2:
            print(f"The subtraction is = {mymodule.subtract(num1, num2)}")
        elif operator == 3:
            print(f"The multiplication is = {mymodule.multiply(num1, num2)}")
        elif operator == 4:
            print(f"The division is = {mymodule.divide(num1, num2)}")
    elif operator == 5:
        break
    else:
        print("Wrong selection")