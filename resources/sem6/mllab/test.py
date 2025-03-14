import numpy as np

my_arr = np.array([2,3,4,5,1,55])

search = int(input("Enter a searching element :"))

def search_ele(arr, ele):
    for i in arr:
        if i == ele:
            return i
    return -1

if(search_ele(my_arr, search) == -1):
    print(f"Element not found")
else:
    print("")


    # WAP to add two numbers. X
    # WAP to check whether a number is even or odd. X
    # WAP to find the largest number among three numbers. X
    # WAP to swap two numbers without using a third variable. X
    # Write a function to print the table of a given number. X
    # WAP to generate a random number between 0 and 100. X
    # WAP to print the factorial of a given number. X
    # Write a function to check whether a given number is a palindrome or not. X
    # WAP function to sum all the numbers in a given list. X
    # Write a function to print the minimum and maximum numbers from a given array. X
    # Write a function to perform a linear search.
    # WAP to print prime numbers from 1 to 300.
    # WAP to print the user information.
    # ********************************
    # Check if a string is a palindrome
    # Generate the Fibonacci sequence up to n terms.
    # Count the frequency of each word in a given text.
    # Check the strength of a password based on rules (e.g., length, uppercase, lowercase, digits, special characters).
    # Count the number of words in a text file.
    # Check if a number is prime.
    # Reverse a string without using built-in functions.
    # Find the second largest number in a list.
    # Merge two dictionaries into one.
    # Find common elements between two lists.
    # Remove duplicates from a list while preserving the order.
    # Check if two strings are anagrams (contain the same characters in a different order
    # Generate a random password of a specified length.
    # Find the longest word in a given sentence.
    # Calculate the factorial of a number using recursion.