# Exercícios

## Part I - Input and Output Commands

1. Navigate to the `unix_tests` folder;

2. Create a text file from the terminal with the name `skills2.txt` and add the values ​​`Internet`, `Unix` and `Bash`, one on each line.

3. Add 5 more items to your skill list and then print the sorted list in the terminal.🤓

4. Count how many lines the `skills2.txt` file has.

5. Create a file called `top_skills.txt` using `skills2.txt`, containing the first 3 skills in alphabetical order.

6. Create a new file called `phrases2.txt` from the terminal and add some phrases of your choice.

7. Count the number of lines that contain the letters `br`.

8. Count the number of lines that **don't** contain the letters `br`.

9. Add two country names to the end of the `phrases2.txt` file.

10. Create a new file called `bunch_of_things.txt` with the contents of the `phrases2.txt` and `countries.txt` files

11. Sort the `bunch_of_things.txt` file.

## Part II - Permissions

1. Navigate to the `unix_tests` folder;

2. Run the command `ls -l` and check the file permissions;

3. Change the permission of the `bunch_of_things.txt` file so that all users can have read and write access, and verify that it is correct with the command `ls -l`;

> Expected result: `-rw-rw-rw- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt`

4. Remove the write permission of the `bunch_of_things.txt` file for all users, check that it is correct with the command `ls -l`;

> Expected result: `-r--r--r-- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt`

5. Return the permission of the `bunch_of_things.txt` file to the one initially listed using the command `chmod 644 bunch_of_things.txt.`

> Expected result: `-rw-r--r-- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt`

## Part III - Processes & Jobs

1. List all processes;

2. Now use the command `sleep 30 &`;

3. Use the process listing to find the PID of the process executing the `sleep 30` command and end its execution (~~kill the process~~);

4. Run the `sleep 30` command again, but this time without the `&`. Then make it keep running in the background;

5. Create a background process that runs the `sleep` command for 300 seconds.

6. Create two more processes that run the `sleep` command for 200 and 100 seconds, respectively.

> You should create them in the foreground (without using `&`) and suspend them (by pressing `ctrl+z`) after each one starts running.

7. Verify that only the `sleep 300` process is running with the `jobs` command. Suspend execution of this process.

You will need to foreground the process ( `fg` ) and suspend it ( `ctrl+z` ), or send a signal).

8. Resume running the `sleep 100` process in the background with the `bg` command.

9. Stop running all `sleep` processes (~~kill the processes~~).


## (Bonus) - Part IV - The Terminal Awakens

And to finish with the energy, oh, up there, how about learning some fun UNIX commands now? ☝🎊

1. Open the terminal and run the command `sudo apt-get install cmatrix` and then run the command `cmatrix`. When you're feeling like Neo, hit `ctrl+c` to get back to the terminal;

2. Run the command `sudo apt-get install fortune`, after installation, create a text file called `fortune.txt` that contains your fortune of the day. Use only one command line. Tip: use the `fortune` command, and the `>` operator;

3. Count how many words your lucky phrase of the day has. Tip: use the `wc` command;

4. Run `sudo apt-get install sl` command, after installation, run `sl` command. Now try `sl -F`;

5. Run sudo command `apt-get install cowsay`, after installation, run command `cowsay` and whatever you want to say. Now make the kitty say the phrase that is recorded in the `fortune.txt` file;

6. Find the prime factors using the `factor` command and then the number 42;

7. See how your luck turns out in reverse. Tip: use the `rev` command.

8. Run the command `telnet towel.blinkenlights.nl` and wait a few seconds. Remember you have more exercises to do!😅