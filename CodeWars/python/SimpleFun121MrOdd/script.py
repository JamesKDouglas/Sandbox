# input will be a string up to 10 000 characters. It may be empty.
# extract from the string the maximum number of substrings spelling "odd"

# By "extract" it is meant that the characters are removed in the correct order 
# to spell the word

# return the maximum number of strings spelling "odd" that can be formd

# ex: ouddbdo => ubdo or udbo after extraction. return 1.
# ddod => return 0. Letters cannot be scrambled to form the word
# ooudddbd => return 2.

# No special characters expected. Timeouts 12 000 ms.

def odd(s):
    print("s: ", s)
#     Go through the string one character at a time. Track the character
# you're looking for.
# First search for an o. If you find it, carry on the search for a d. then a d.
# If you find the third character (second d) then add to the counter. 
# We do need to remove letters once counted.

    counter = 0;
    letterIndex = 0;
    lettersArr = ["o","d","d"]

# stuff I might normally do with a for loop in JS I'll do with a while loop in python
    ind = 0
    while ind < len(s):
        letter = s[ind] 
        print("examining letter: ", letter, " at index: ", ind)
        if letter == lettersArr[letterIndex]:
            print("found a letter! at index: ", ind)
#             subtract the letter    
            s = s[:ind] + s[ind+1:]
            ind -= 1
            print("letter removed. s is now: ", s)
            if letterIndex == 2:
                print("found an odd!")
                counter += 1
                letterIndex = 0
                # restart at beginning of string
                ind = 0
                continue
            else: 
                letterIndex +=1 
        ind += 1

    return counter;
    
# print(odd("ouddbdo"), 1)
# print(odd("ddod"), 0)
print(odd("ooudddbd"), 2)