# input will be 2 characters. They can be letters, special characters or numbers
# The goal is to determine:

# If either character is not a letter (return -1).
# If the characters are the same case or not:
#     If they are both the same case (return 1).
#     If they are both letters but not the same case (return 0)

# edge cases? newline character? Ya maybe. multiple characters? not expected
# no timeout issues.

def same_case(a, b): 
    # first of all, decide if the two parameters are characters
    # I can do that with ord(a) and ord(b). This returns the ascii number and it should be between 
    # lowercase 97 to 122
    # uppercase 65 to 90

    # then if we pass that then move on to uppercase and lowercase. Which range is the character in?
    #  use flags aUpper and bUpper. See if they are the same.

    aVal = ord(a)
    bVal = ord(b)

    if aVal>=97 and bVal<=122:
        aUpper = False
    if bVal>=97 and bVal<=122:
        bUpper = False
    if aVal>=65 and bVal<=90:
        aUpper = True
    if bVal>=65 and bVal<=90:
        bUpper = True

    # if the value was never set then return -1 because the character is not a letter
    if aUpper in vars(): 
        pass
    else:
        return -1
    if bUpper in vars(): 
        pass
    else:
        return -1
    
    if aUpper == bUpper: 
        return 0 
    else: 
        return 1
    # if a.upper() == a:
    #     aUpper = True
    # if b.upper() == b:
    #     bUpper = True
        
    # if bUpper == True && aUpper==true:
    #     #both uppercase
 
    
print(str(same_case("a","g")) + " 1")
print(str(same_case("B","C")) + " 1")
print(str(same_case("B","g")) + " 0")
print(str(same_case("B","?")) + " -1")

# I wasn't able to get the reporting of a variable as undefined to work. Monadius has a concise solution:
# def same_case(a, b):
#     return a.isupper() == b.isupper() if a.isalpha() and b.isalpha() else -1