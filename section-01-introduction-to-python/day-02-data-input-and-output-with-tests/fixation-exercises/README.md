# Exercises

## Now the practice

**Exercise 01**: Make a program that receives a name and prints it vertically in an inverted ladder. Example:

*Entry:*

```
PEDRO
```

*Output:*

```
PEDRO
PEDR
PED
PE
P
```

**Exercise 02**: *Scrambled word game*. Develop a game in which the user has to guess a word that will be shown with scrambled letters. The program will take a list of words and choose one at random. The player will have three attempts to guess the word. At the end, the word must be shown on the screen, informing whether the person won or lost the game.

**Exercise 03**: Modify the previous exercise so that the words are read from a file. Assume the file will have each word on one line.

**Exercise 04**: Given the following [file](https://lms-assets.betrybe.com/lms/books.json?_gl=1*8csso5*_ga*MTA2NTY3MDc1MC4xNjc5NTA3NjY3*_ga_JRYMZ1LMBF*MTY4Nzk0OTM2Ni4xMTEuMS4xNjg3OTQ5NTE3LjYwLjAuMA..) in JSON format, read its contents and calculate the percentage of books in each category in relation to the total number of books. The result must be written in a file in CSV format like the example below.

*Output*:

```
categoria,porcentagem
Python,0.23201856148491878
Java,0.23201856148491878
PHP,0.23201856148491878
```

**Exercise 05**: 
Write a program that returns a list of numerical values ​​from 1 to N, but with the following exceptions:

- Numbers divisible by 3 must appear as “Fizz” instead of the number;

- Numbers divisible by 5 must appear as “Buzz” instead of the number;

- Numbers divisible by 3 and 5 should appear as “FizzBuzz” instead of the number.

Example: `3 -> [1, 2, "Fizz"]`.

**Exercise 06**: 
Make a function that validates an email, throwing an exception when the value is invalid. Valid email addresses must adhere to the following rules:

- They must follow the format `username@websitename.extension`;

- The username must contain only letters, digits, dashes and underscores (_);

- The username must start with a letter;

- The website name must contain only letters and digits;

- The maximum extension length is 3 characters.

The `isalpha`, `isdigit` and `isnumeric` functions can be used to check if a letter or word is composed of only characters or digits. Example: `"1".isalpha() -> False , "a".isalpha() -> True, "123".isnumeric() -> True`.