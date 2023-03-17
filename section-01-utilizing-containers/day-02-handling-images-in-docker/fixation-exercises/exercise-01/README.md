# Exercise 01

## To consolidate

Let's use an image available on DockerHub known as “cowsay” (a talking cow in the terminal 🐮)!

The idea is to leave the message for *cowsay* configurable. In this way, we will be able to run the command:

```docker container run cowsay Muuuuuuhhh```

And have the following output in the terminal:

```____________
< Muuuuuuhhh >
------------
         \   ^__^
         \  (oo)\_______
            (__)\       )\/\
               ||----w |
               ||     ||
               
```

For that:

1. Create a Dockerfile using the `chuanwen/cowsay` image.

2. Set an `ENTRYPOINT` for command execution.
- Note that the `cowsay` executable is in the `/usr/games/` directory
- Remember that with it, unlike `CMD`, the command cannot be overwritten with `docker run`, but we will be able to pass parameters to the binary and we will explore - this feature to be able to pass the message.

3. Use `CMD` to define a default message.

4. Generate a `build` and run a container based on your image without passing any commands.

5. Run a new container passing your message to test. In addition to the message you can use the `-l` option to list other available characters and then run something like `docker container run cowsay -f dragon-and-cow "VQV TRYBE"` to display a dragon along with the cow.

