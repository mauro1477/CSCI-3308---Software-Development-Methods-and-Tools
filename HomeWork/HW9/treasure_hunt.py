#from math import required libary package for math toolbox
#from math import factorial as f
#Binomial theorem tells us how to  expand expressions of the form (a+b)^n, for eample (x+y)^7
#The larger the power is, the harder it is to expand expressions like this directly.
#The binomial theorem, makes this process relativeely fast.
import math
def treasure_hunt(m, n, p):

    return (math.factorial(m*n)/(math.factorial(m*n-p)*math.factorial(p)) * (m*n-p) * (m*n-p))
def Main():
    print(treasure_hunt(2, 2, 1));
Main()
