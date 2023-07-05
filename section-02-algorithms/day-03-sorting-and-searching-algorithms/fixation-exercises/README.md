# Exercises

## Now the practice

**Exercise 01:**
Given an array with the following elements `["zebra", "monkey", "elephant", "macaw", "boar"]`, after two iterations using bubble sort, what would this array look like?

**Exercise 02:**
Demonstrate the step-by-step process of merging an array, being sorted using merge sort. Start the walkthrough from the line below:

```
7 3    5 4    6 8    2 1
```

**Exercise 03:**
Run the selection and insertion sort algorithms for sorted, inversely sorted, and random data entries. Then compare them. Test for inputs of size 10,000, 100,000, 1,000,000.

> Input data can be generated as follows:

```
from random import shuffle


ordenados = list(range(100))
inversamente_ordenados = list(reversed(range(100)))
aleatorios = ordenados[:] # copia dos ordenados
shuffle(aleatorios) # embaralha eles
```

**Exercise 04:**
Compare the running time of the `merge_sort` and `bubble_sort` algorithm for an input of 10,000 random values. Explain through complexity analysis what happens.

**Exercise 05:**
Convert the recursive binary search algorithm to iterative.

**Exercise 06:**
To find out which *commit* introduced a bug into the system, we need to go back in time and check old commits to find a commit where the tests fail. Assuming this will be represented as an array of booleans, find the index where the error first occurred.

As tests take time to run, solve the problem by running as few tests as possible.

```
entrada: [True, True, True, True, False, False, False]  # saída: 4


entrada: [True, True, False, False, False, False, False]  # saída: 2
```