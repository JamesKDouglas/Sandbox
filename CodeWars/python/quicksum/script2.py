# The input will be a string which can contain spaces, numbers and letters

# each character has a score associated with it: a=1, b=2, etc.
# spaces are 0.

# no mixing of uppercase and lower case in the input is allowed. If there is,
# return 0

# calculate the sum of all the characters multiplied by the position of each

# ex: ACM => 46
# A C M => 75
# the second here has a higher value because the positions are advanced from the spaces.

def quicksum(packet):
    result = 0
    
    
    for idx, char in enumerate(packet, 1):
       
        if char.isupper():
            result += idx * (ord(char) - 64)
        elif char == " ":
            continue
        else:
            return 0
    
    return result

inpt1 = "ACM"
inpt2 = "A C M"
print(str(quicksum(inpt1)) + ", 46")
print(str(quicksum(inpt2)) + ", 75")

