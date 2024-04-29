myStr = "Hello  ython"

def findMiddle(s):
    midIndex = int(len(s)/2)
    midValue = s[midIndex]
    if midValue == " " or len(s) <= 1:
        print("There is no middle element")
        return
    else:
        return midValue
    
print("The middle value is = ", findMiddle(myStr))