# input will be a string. Just letters.
# there will be a camel case sequence. 

# The goal is to put a space in front of the uppercase.
# more than one?

# return a modified string.

# edge cases? Two capitals? like hellOWorld? => hell O World?
#   if there is a space, don't add a second. If it's the first letter don't add a space.
#   that is, camel case is from one word/string to two or more
# job size/timeout. small jobs. 

def solution(s):
# two variables to hold 2 characters.
# Make string into array?
# Loop through the characters.
# Skip the first character. 
# extract two characters. use toUpperCase() and equality. Determine if we see
# an uppercase/lowercase combo in that order.

# variableForNDVIData => variable For NDVI Data? variable For NDV I Data?
# should we keep groups of capital letters intact or not?
# This isn't part of the test cases. AVWorker => AV Worker?
# ok so then what I want to do is not look for lL but Ll. No words start with 2
# capital letters. A series of capital letters gets the final one cut off.
# another edge case "edgeCaseA"=> edge Case A? Well it isn't part of our cases.

    firstLetter = s[1]
    secondLetter = s[2]
    for i, letter in enumerate(s):
        if i>2:
            if firstLetter.upper()==firstLetter and secondLetter.upper()!=secondLetter:
#                 found a camel case! Insert a space
                #   do nothing if there is already a space
                if s[i-2]!=" ":
                    s = s[0:i-2] + " " + s[i-2:]
            firstLetter = s[i-1]
            secondLetter = s[i] 
    return s
    
print(solution("camelCasing"), "camelCasing")
print(solution("some string to Parse"), "some string to Parse")
print(solution("A sentence."), "A sentence.")
print(solution("AVariableUsingCamelCase"), "A Variable Using Camel Case")
