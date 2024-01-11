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

#early return 
    if len(s) == 0:
        return ""

    firstLetter = ""
    secondLetter = ""
    j = 0;

    #python for loops are strange because you cannot simply skip the iterator ahead. We can just use a while loop instead
    while j<len(s):
        print("examining letter at position", j)
        print("which is a,", s[j])
        if j>2:
            firstLetter = s[j-1]
            secondLetter = s[j] 
            if firstLetter.upper()==firstLetter and secondLetter.upper()!=secondLetter:
                print("found a camel case! ", firstLetter, " and, ", secondLetter)
                # print("found a camel case! ", s[j-1], " and, ", s[j])
                #  found a camel case! Insert a space
                #  do nothing if there is already a space
                if s[j-1]!=" ":
                    s = s[0:j-1] + " " + s[j-1:]
                    j+=1 #we need to skip ahead again otherwise it adds another space!
            # firstLetter = s[j-1]
            # secondLetter = s[j] 
        j += 1
    return s
    
# print(solution("camelCasing"), "camel Casing") # regular parse
# print(solution("some string to Parse"), "some string to Parse") # avoid adding an extra space
# print(solution("A sentence."), "A sentence.") # avoid adding a space to the start
# print(solution("AVariableUsingCamelCase"), "A Variable Using Camel Case") # regular parse, also avoid adding space to start
# print(solution(""), "")

#one more edge case - camel case is near the end
print(solution("workTellAbleGo"), "work Tell Able Go")
