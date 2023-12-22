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

    print(packet)
    #split the packet up into an array
    #examine each character in a for loop
    #Multiply the charvalue by the index and add them to a running sum
    
    sum = 0

    # if there is a mix of capitalization then return 0
    if packet != packet.upper():
        return 0

    #if there are only spaces return 0
    foundChar = False

    for j in packet:
        if j != " ":
            foundChar = True
    
    #found nothing other than spaces
    if foundChar == False:
        return 0

    packet = packet.upper()
    for i in range(len(packet)):
        # print(i)
        # print(ord(packet[i]))
        char = packet[i]
        # print(char)
        charScore = ord(packet[i])
        #  " " is 32, 1 is 49, uppercase A is 65
        # print("charscore: " + str(charScore))

        if charScore == 32:
            #we found a space
            # print("found a space")
            charScore = 0
        elif charScore<57:
            #found a digit. 1 is 49
            # print("found a digit")
            charScore = charScore-48
        elif charScore<65:
            #found a special character
            return 0
        else:
            #found a letter
            # print("found a letter")
            charScore = charScore-64

        # print(charScore)
        sum += (charScore)*(i+1)
        # print(sum)

    return sum

inpt1 = "ACM"
inpt2 = "A C M"
print(str(quicksum(inpt1)) + ", 46")
print(str(quicksum(inpt2)) + ", 75")

#a more concise version from anter69
# def quicksum(packet):
#     result = 0
    
#     for idx, char in enumerate(packet, 1):
#         if char.isupper():
#             result += idx * (ord(char) - 64)
#         elif char == " ":
#             continue
#         else:
#             return 0
    
#     return result