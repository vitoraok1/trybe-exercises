# Exercises

## Now the practice

**Exercise 01 - Bluff**:
Bluff is a two-person game where each person tries to guess the numbers the other will choose. Each player chooses 5 numbers from 0 to 10 inclusive. The final score is calculated as follows:

- Each person's starting score is the highest number that the other person did not choose;
- The reducer is the smallest number that the other person did not choose;
- The final score is the `starting score - reducer`.

*Example*:

```
clara = [0, 1, 5, 9, 10]
# starting grade: 5
# reducer: 1
# en: 4

marco = [0, 2, 8, 9, 10]
# starting grade: 8
# reducer: 2
# individual pt: 6

# Who won: Marco
```

Implement a function that receives a dictionary with the guessed names and numbers and returns the name of the winner.

```
entry = {
    'Clara': [0, 1, 5, 9, 10],
    'Marco': [0, 2, 8, 9, 10]
}

# exit: 'Marco'
```

- *Do the complexity analysis of your algorithm*.


**Exercise 02 - Substring**:
Given a string, find the length of the largest substring that has no repeating characters. Acceptable timeout complexity: `O(n²)`.

```
string = "serdevemuitolegalmasehprecisoestudarbastante"
```

- *Do the complexity analysis of your algorithm*.