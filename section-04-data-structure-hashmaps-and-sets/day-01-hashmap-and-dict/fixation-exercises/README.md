# Exercises

## Now the practice

**Exercise 01 - Google**:
A certain company has a hierarchical structure where each person reports to only one other person. Each person has a score that is the total of people who are below him, including subordinates of his subordinates, in addition to himself. This means that a person who has no team has a score of 1. A person with only one subordinate and that subordinate has no team has a score of 2.

Write a method that calculates the score of a given person.

*Example subordinates:*

```
- 1 => 2, 3

- 2 => 4

- 3 => no subordinates

- 4 => 5, 6

- 5 => 7

- 6 => no subordinates

- 7 => no subordinates
```

In this example, each person's *score* is:

```
- 1 => 5 (score 2) + 1 (score 3) + 1 (score itself) = 7

- 2 => 4 (score 4) + 1 (score itself) = 5

- 3 => 1 (own score)

- 4 => 2 (score 5) + 1 (score 6) + 1 (score itself) = 4

- 5 => 1 (score 7) + 1 (score itself) = 2

- 6 => 1 (own score)

- 7 => 1 (own score)

```

- Perform a complexity analysis of your solution.

**Follow-ups**:

1. If the company needs to make this query frequently, how can you make these queries more efficient? How can you save the result of previous queries?

2. Write a method for adding a new person to someone else's team. Your method should consider that each person can have a maximum of `k` people on their team. If the team is full, the new hire can be placed on the team of anyone below her, not having to be on the team immediately below her.

3. If you add a new hire to the list of subordinates, the structure you made in `follow-up 1` is out of date. Modify your roles so that this structure is updated along with the addition of a new hire. Do this without re-running the `score(`) function and remember to update all scores from the CEO person to the team the new hire joins.