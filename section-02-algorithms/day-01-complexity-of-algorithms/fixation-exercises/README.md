# Exercises

## Now the practice

**Exercise 01:**
Given an array of numbers of size `n`, write an algorithm that returns `true` if there is a duplicate number in the array and `false` otherwise. Analyze the solution below and tell what is the order of complexity of this algorithm for best case, worst case and average case.

```
def contains_duplicate(numbers):
    numbers.sort()
    previous_number = 'not a number';
    for number in numbers:
        if(previous_number == number): return True
        previous_number = number

    return False
```

**Exercise 02:**
Use the Python language `random` module to generate an array with 100 numbers. Each must be the average of `n` randomly generated numbers. What is the order of time and space complexity of this program?

**Exercise 03:**
Given an array of candies and an integer value extra_candies, where candies[i] represents the number of candies that the nth child has. For each child, check to see if there is a way to distribute extra candy among the children so that the child can have the most candy between them. Note that multiple children can have the most candies. Analyze the code below for best, worst case, and average case. Do space complexity analysis as well.

```
def kids_with_candies(candies, extra_candies):
    # parece que a solução percorre o array somente uma vez,
    # porém isto é feito duas vezes, uma no `max` e outra para
    # preencher a resposta
    max_candies = max(candies)
    return [candy + extra_candies >= max_candies for candy in candies]


# saída: [True, True, True, False, True]
print(kids_with_candies([2, 3, 5, 1, 3], 3))
```