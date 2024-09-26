# Exercises

## Now the practice

**Exercise 01**:
Improving the `List` class: our `List` class meets the main operations that this TAD offers us, but how about we improve? For this you must add the following methods:

**a.** The `clear` operation allows us to remove all `Nodes` from the list;

**b.** The `__get_node_at` operation allows us to access the `Node` at any position in the list.

*After creating the previous operations, refactor the following methods so that they use __get_node_at before iterations:*

- insert_at;
- insert_last;
- remove_last;
- remove_at;
- get_element_at.

- Perform a complexity analysis of your solution.


**Exercise 02**:
New search: so far our structure queries elements by position. In this activity, it will be necessary to create a function called `def index_of(self, value)`, where it will be responsible for querying the existence of the informed value in the list and returning the position of the first occurrence. If the value does not exist, consider returning `-1`. This function must respect `O(n)` complexity.

- Perform a complexity analysis of your solution.
