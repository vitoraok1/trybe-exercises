## Exercise 18

(Bonus) Write a program that takes a string in Roman numerals and returns the number that the string represents.

```
| I   | 1    |
| --- | ---- |
| IV  | 4    |
| V   | 5    |
| IX  | 9    |
| X   | 10   |
| XL  | 40   |
| L   | 50   |
| XC  | 90   |
| C   | 100  |
| CD  | 400  |
| D   | 500  |
| CM  | 900  |
| M   | 1000 |
```

- How about creating an object that associates each letter with a numeral for easy reference?

- Heads up! When you have a small number to the right of a large number, they must be added. Example: XI = 10 + 1 = 11. However, if the small number is to the left of a larger number, it must be subtracted. Example: IX = 10 - 1 = 9.