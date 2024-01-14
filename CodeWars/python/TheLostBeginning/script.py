# The input will be a string composed of positive integers ("natural numbers")

# The length of the input string is above 0, less than 140. Largest 1 billion, smallest 0.

# Imagine that the string is a concatenated list of -consecutive- natural numbers.

# Report the smallest first natural number of that sequence.

# ex: 
# 123 => return 1. Imagine the list as 1,2,3
# 17181920 => return 17. Note we can't return just 1 because the string
# has to be divide into a list of consecutive numbers => 17, 18, 19, 20 here.

# return the number as an integer.

# edge cases? what if it leads with a 0?
# 01234 => return 0 or 1? 0.


def find(s):
    # Finding the first 2 numbers is key.
    # Try by digit length:
    # Look at the first digit. Then the second.
    # ex 123 => 1 and 2. Are they in sequence? 
    # If so, see if the whole string can be divided into the sequence.
    # for 1235 We'll see that it isn't if we test 1, 2, 3 then 5 fails.

    # when we get a failure like that, move to a longer number.

    # 1235 => 1,2 then 2,3 then 3, 5 =>fail. 12,23 =>fail. 123, can't so fail. 
    # so we only need to test like that up to 1 digit past the halfway mark. 
    # since obviously after we get to 123 there is no 124 since there are 
    # only 5 digits.
    # If we fail to find a second number in the sequence after len(s)*1/2+1 digits
    # then just return s as a number.
    num1 = 0
#     num1NextSeq = 1
    num2 = 0
    lengthOfNum = 1;
    i = 0
    numList = []
    while i<len(s)/lengthOfNum:

        num1 = int(s[i:i+lengthOfNum])
        num2 = int(s[i+lengthOfNum:i+2*lengthOfNum])

        if(num2 == num1+1):
#                 sequence ok so far so carry on
            numList.append(num1)
        else:
#         sequence fail! Look for a sequence with longer numbers.
            numList = []
            lengthOfNum += 1  #increase number length
            ind = 0
            
#             are we over halfway? If so then give up
            if lengthOfNum >= (math.floor(len(s)/2)+1):
                return int(s[:math.floor(len(s)/2+1)])
        
        ind += lengthOfNum
        
#         hm, this will work for many cases but not for 
# 9899100 because the length changes 10 3 even though the sequence is valid.

print(find("123"), 1)
print(find("91011"), 9)
print(find("121122123"), 121)
print(find("101"), 101)
print(find("1235", 1235))