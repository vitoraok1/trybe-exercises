# Stacks and Queues

Almost all languages ​​use the stack structure to manage application execution. During program execution, when the Python interpreter encounters a function call, it saves the current function state and then adds it to the call stack. When the called function finishes executing, the interpreter goes back on the stack and reads the function on top to continue the execution of the application.

Another important case is to understand how the Python language solves mathematical expressions, respecting the order of operators. When reading an expression, the Python interpreter assembles a structure called postfix and based on this structure it calculates the values ​​of the expression, respecting the order of the operators.

Both cases are solved using stacks. Understanding the features mentioned above helps us to write better applications.
