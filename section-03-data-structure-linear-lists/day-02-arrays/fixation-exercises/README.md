# Exercises

## Now the practice

**Exercise 01**:
In a monitor software, which verifies the resilience of other software, we need to know the maximum time that a software remained without instabilities. For this, every hour a request is made to the system to check if everything is ok. Assuming an array containing the states collected by our software, calculate the maximum time the server remained without instabilities.

```
1 - OK
0 - Instabilities

collected_values ​​= [0, 1, 1, 1, 0, 0, 1, 1]
result = 3

collected_values ​​= [1, 1, 1, 1, 0, 0, 1, 1]
result = 4
```

- Perform a complexity analysis of your solution.


**Exercise 02**:
In a card game, the cards are represented by a numerical array. To start the game, we must shuffle the cards. We'll do this by splitting a portion of cards in 2 and then merging the two portions. For example:

```
Example 1:
cards = [2, 6, 4, 5]
cards per part = 2

result = [2, 4, 6, 5]

Example 2:
cards = [1, 4, 4, 7, 6, 6]
cards per part = 3

result = [1, 7, 4, 6, 4, 6]
```

- Perform a complexity analysis of your solution.


**Exercise 03**:
Imagine that you are working in an e-commerce, and you were asked to analyze an array of integers that represent the products of that company. Check how many products form good combinations, that is, when one product is the same as the other and its index is greater than the previous one. This combination can be used to modify the products on a page. For example:

```
Example 1:
products = [1, 3, 1, 1, 2, 3]
result = 4
The indices (0, 2), (0, 3), (1, 5), (2, 3) form combinations.

Example 2:
products = [1, 1, 2, 3]
result = 1
The indices (0, 1) form the only combination.
```

- Perform a complexity analysis of your solution.


**Exercise 04**:
You have two arrays of integers that represent:

I - input and output instants in a library II - a number that represents an instant to be searched.

Return how many students are in the library at that time. Assume that every student has entered and left the library.

```
entries = [1, 2, 3]
outputs = [3, 2, 7]
instant_fetched = 4
result: 1

Student 1 entered at instant 1 and left at 3, while the second entered
and left at 2 and the last one was the only one to be present at instant 4.
```

- Perform a complexity analysis of your solution.


**Exercise 05**:
In a server manager software, we need to check the number of servers that communicate with each other. The servers are represented as a two-dimensional array where the value 1 represents a computer and 0 the absence of it. Two servers communicate if they are on the same row or column.

```
servers = [[1,0],[0,1]]
result: 0
Rows and columns are different.

servers = [[1,0],[1,1]]
result: 3
All servers communicate with at least one other server.

servers = [[1, 0, 0],
              [1, 0, 0],
              [0, 0, 1]]
result: 2
The index server (2, 2) has no other in the same row and column.
```

- Perform a complexity analysis of your solution.