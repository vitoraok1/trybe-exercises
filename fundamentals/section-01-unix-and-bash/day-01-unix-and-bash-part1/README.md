# Exercises

## Part I - Creating files and directories

1. Using the terminal, apply the directory creation command you learned: create a directory named `unix_tests` and navigate to it.

2. Create a text file named `trybe.txt`.

3. Create a copy of the file `trybe.txt` with name `trybe_backup.txt`.

4. Rename the file `trybe.txt`.

5. Inside `unix_tests` , create a new directory named `backup`.

6. Move the file `trybe_backup.txt` to the directory `backup`.

7. Inside `unix_tests` , create a new directory named `backup2`.

8. Move the file `trybe_backup.txt` from directory `backup` to `backup2`.

9. Remove the directory `backup`.

10. Rename the directory `backup2` to `backup`.

11. Check the full path of the current directory and list all the files within it.

12. Remove the directory `backup`.

13. Limpe o terminal.

**For exercises 14 and 15, manually create a text file with the content below, in the graphical part of your operating system, called `skills.txt`:**

```
Internet
Unix
Bash
HTML
CSS
JavaScript
React
SQL
```

14. Show on the screen the first 5 skills of the file `skills.txt`.

15. Show on the screen the last 4 skills of the file `skills.txt`.

16. Remove all the files terminated with `.txt`.

## Part II - Manipulation and Search

1. Inside `unix_tests`, download a file with the names of all the countries in the world using the command curl:

```
curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"
```

2. Show all file contents `countries.txt` on the screen.

3. Show the content of `countries.txt`, page by page, until you find `Zambia`.

4. Show again the content of `countries.txt` page by page, but now use a command to search for `Zambia`.

5. Search for `Brazil` in `countries.txt`.

6. Search again for `brazil` , but now using lower case.

**For the next steps, create a new file called `phrases.txt` and a few sentences of your choice. No need to create the file through the terminal.**

7. Search for phrases that do not contain the word `fox`.

8. Count the number of words in the file `phrases.txt`.

9. Count the number of lines in the file `phrases.txt`.

10. Create the files `empty.tbt` and `empty.pdf`.

11. List all files in directory `unix_tests`.

12. List all files ending with `.txt`.

13. List all files ending with `.tbt` or `.txt`.

14. Access the command manual `ls`.