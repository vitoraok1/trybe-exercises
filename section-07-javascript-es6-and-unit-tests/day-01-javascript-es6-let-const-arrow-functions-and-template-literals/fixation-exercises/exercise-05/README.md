# Exercise 05

Create two *JavaScript* functions with the following specifications:

## Function 1: Write a function that replaces the letter 'x' in a sentence.

- The function name should be `replaceX`;
- The function must receive a `name` per parameter;
- Declare within the function a variable of type `const`, with the name phrase, assigning the value `'Tryber x here!'`;
- The function should return a new sentence where the `x` of the sentence `'Tryber x here!'` be replaced by the name passed by parameter.

**Example:**

Parameter: 'Bebeto'
Return: 'Tryber Bebeto here!'

## Function 2: Write a function that will receive the return of Function 1 by parameter and will return a new string.

- The role name should be `mySkills`;
    - The function must receive the return of Function 1 - `replaceX` by parameter;
- Declare within the function a variable with the name **skills**, of type `const`;
    - The **skills** variable should be an `array` containing three `strings` with technologies you've already learned.
- Create a variable of type `let` and concatenate the value returned from Function 1 - `replaceX` (use `template literals`), the phrase '`My top three skills are:`' and the value of the `skills` variable.

**Return example:**

Tryber Bebeto here!
My three main skills are:
- JavaScript
- HTML
- CSS