# Exercise 04

## Autocorrect exam

Create a *HOF* that will receive three parameters:

- The first will be an array of correct answers (solutions);

- The second will be an array containing the answers provided by a student person;

- The third is a function that compares the two arrays and then gives a score based on the hits. For this, this function will use the following criteria:

  - A correct answer adds 1 point to the final score;

  - The absence of an answer does not change the score (when it is “N.A”);

  - An incorrect answer reduces the final score by 0.5 point.

At the end, *HOF* must return the total points obtained through the answers provided by the student. Use the following arrays:

```
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];