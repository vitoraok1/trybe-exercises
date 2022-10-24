# Exercise 05

# Bonus - Game Actions Simulator

**Part 1**

In these exercises you will implement *HOFs* that simulate a battle turn in a game. You will create functions that calculate damage, update status, and at the end, return the results of the round.

For the next exercises copy the code below.

```
const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };
```

- Create a function that returns dragon damage.
- The damage will be a random number between 15 (minimum damage) and the value of the `strength` attribute (maximum damage).

- Create a function that returns the damage caused by `warrior`.
- The damage will be a random number between the value of the `strength` attribute (minimum damage) and the value of `strength` * `weaponDmg` (maximum damage).

- Create a function that returns an object with two keys and two values ​​containing the damage and mana spent by the mage in a turn.
- The damage will be a random number between the value of the `intelligence` attribute (minimum damage) and the value of `intelligence` * 2 (maximum damage).
- The `mana` consumed per turn is 15. In addition, the function must have a conditional, if the mage has less than 15 mana, the damage value receives a message (Ex: "You don't have enough mana") and the mana spent is 0.

**Part 2**

Now that you already have the implementation of the functions related to the previous three exercises, pass them as parameters to other functions that will compose a `gameActions` object. The object will be composed of game actions and each action is by definition a *HOF*, because, in this case, they are functions that receive another function as a parameter.

Copy the code below and start its implementation:

```
const gameActions = {
  // Create the HOFs on this object.
};
```

- Create the first *HOF* that makes up the `gameActions` object.
It will be the function that simulates the `warrior` character's turn. This *HOF* will receive as a parameter the function that calculates the damage done by the `warrior` character and will update the `healthPoints` of the `dragon` monster. In addition, it must also update the value of the `damage` key of the `warrior`.

- Create the second *HOF* that makes up the `gameActions` object.
It will be the function that simulates the `mage` character's turn. This *HOF* will receive as a parameter the function that calculates the damage done by the `mage` character and will update the `healthPoints` of the `dragon` monster. In addition, it must also update the value of mage's `damage` and `mana` keys.

- Create the third *HOF* that makes up the `gameActions` object.
It will be the function that simulates the turn of the `dragon` monster. This *HOF* will receive as a parameter the function that calculates the damage deferred by the `dragon` monster and will update the `healthPoints` of the characters `mag`e and `warrior`. In addition, it must also update the value of the `damage` key from monster.vvvv

- Add to the `gameActions` object a first class function that returns the updated `battleMembers` object and do a `console.log` to view the final result of the turn.


