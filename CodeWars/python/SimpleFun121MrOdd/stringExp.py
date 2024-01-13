s = "some string"
# remove first character, so index 0
print(s[0:0]+s[1:])
# remove middle character, at index 2.
print(s[0:2]+s[3:])
# remove last character, so index 10
print(s[0:len(s)-1])
print(s[0:10]+s[11:])

# general form then is print(s[0:ind] + s[ind+1:]) to remove a character at ind