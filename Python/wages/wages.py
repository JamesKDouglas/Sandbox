# Write a program to prompt the user for hours and rate per hour using input to compute gross pay. Pay should be the normal rate for hours up to 40 and time-and-a-half for the hourly rate for all hours worked above 40 hours. Put the logic to do the computation of pay in a function called computepay() and use the function to do the computation. The function should return a value. Use 45 hours and a rate of 10.50 per hour to test the program (the pay should be 498.75). You should use input to read a string and float() to convert the string to a number. Do not worry about error checking the user input unless you want to - you can assume the user types numbers properly. Do not name your variable sum or use the sum() function.

# So the input will be hours worked and a base wage.
# And we're going to look at those hours worked then consider if we should pay time and half or not
# If the hours worked is over 40 then yes we have to pay time and a half
# return the amount that the person should be paid. 

# no edge cases or timeouts

#use try: except TypeError if you want.

msg = "Hello Welcome to Wage Program"
print(msg)

def wageCalc (h, r):
    print ("Pay this much:")
    # print (type(h))
    h = float(h)
    r = float(r)
    bonus = 0
    if h>40:
        bonus=(h-40)*r*1.5
        base = 40*r
        return base + bonus
    return r*h

rate = input("Hourly wage $/hr:")
hours = input("Number of hours worked this week:")

print (wageCalc(hours, rate))
print ("test: " ,wageCalc(45, 10.5), 498.75)
