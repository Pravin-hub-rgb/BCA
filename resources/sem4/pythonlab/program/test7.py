def swapFirstLast(str):
    first_char = str[0]
    last_char = str[-1]
    newStr = last_char + str[1:-1] + first_char
    return newStr

myStr = "menance"

print(swapFirstLast(myStr))