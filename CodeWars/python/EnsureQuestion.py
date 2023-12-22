# The input will be a string. It may or may not end in a ?

# The goal is to add a question mark if there is none at the end.

# then return the string. If there is already a ? just return the input.

# ends in ! etc - still add a ?. Empty string submitted?
# timeouts/job size? Not an issue.
# 

def ensure_question(s):
#     use s[len(s)-1] to refer to the last character.
#     use + to add a character

#     if the last character isn't a ? Add a ?!
    if len(s)==0:
        return "?"
    
    if s[-1] == "?":
        return s
    else:
        return s +"?"
    

print(str(ensure_question("yes") +" yes?"))
print(str(ensure_question("yes!") +" yes!?"))
print(str(ensure_question("No?") +" No?"))