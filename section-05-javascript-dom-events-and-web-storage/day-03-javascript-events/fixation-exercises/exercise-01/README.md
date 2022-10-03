# Exercise 01

## :rocket: Tryber calendar

![calendar gir](images/GIF%20Calendario%20Tryber.gif)

Before doing the exercises, create an HTML file in the `exercises/events` folder and copy the code below:

`index.html`

```
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="style.css">
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Calendar</title>
  </head>
  <body>
    <header class="month-container">
      <ul>
        <li id="month">Dezembro</li>
        <li id="year">2020</li>
      </ul>
    </header>
    <div class="week-days-container">
      <ul class="week-days">
      </ul>
    </div>
    <div class="days-container">
      <ul id="days">
      </ul>
    </div>
    <div class="buttons-container">
    </div>
    <section class="tasks-container">
      <div class="my-tasks">
        <h3>MINHAS TAREFAS</h3>
      </div>
      <div class="input-container">
        <h3>COMPROMISSOS</h3>
        <label for="task-input">Novo:</label>
        <input type="text"
          id="task-input"
          placeholder="Escreva seu compromisso"
        >
        <button id="btn-add">Adicionar</button>
      </div>
      <div class="task-list-container">
        <ul class="task-list">
        </ul>
      </div>
    </section>
    <script src="script.js"></script>
  </body>
</html>
```

Also create a `CSS` file and copy the code below to add style to the page. Feel free to get creative and change the file as you wish!
`style.css`

```

* {
  margin: 0;
}

body {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  background-color: #eee;
}

button {
  margin: 20px;
}

#btn-add {
  margin: 0;
}

.buttons-container {
  background-color: #eee;
  display: inline-block;
  text-align: center;
  width: 100%;
}

#days {
  margin: 0;
}

#days li {
  color: #777;
  display: inline-block;
  font-size:20px;
  margin: 5px 0;
  text-align: center;
  vertical-align: middle;
  width: 13.6%;
}

.input-container {
  width: 49%;
  height: 100px;
  display: inline-block;
}

input {
  margin-top: 8px;
}

label {
  color: #666;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 2px;
  vertical-align: middle;
}

.month-container {
  background: green;
  padding: 40px 25px;
  text-align: center;
}

.month-container ul li {
  color:white;
  font-size: 20px;
  letter-spacing: 3px;
  list-style-type: none;
  text-transform: uppercase;
}

.my-tasks {
  clear: both;
  float: left;
  height: 100px;
  vertical-align: middle;
  width: 49%;
}

.my-tasks div {
  border: 1px solid black;
  border-radius: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: inline-block;
  height: 35px;
  margin-left: 10px;
  vertical-align: middle;
  width: 35px;
}

.my-tasks div:hover {
  height: 45px;
  width: 45px;
}

.my-tasks span {
  color: #666;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 3px;
  padding-bottom: 10px;
  vertical-align: middle;
}

.tasks-container {
  height: 130px;
  justify-content: center;
  text-align: center;
  width: 100%;
}

.tasks-container h3 {
  color: #666;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 20px;
  text-decoration: underline;
  letter-spacing: 3px;
}

.task-list {
  margin-top: 20px;
}

.task-list-container {
  display: inline-block;
}

.task-list-container ul {
  list-style-type: none;
  padding: 0;
  color: #666;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 2px;
  vertical-align: middle;
}

.week-days-container {
  margin-left: 35px;
}

.week-days li {
  color: #666;
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  width: 13.6%;
}

.week-days {
  font-size: 20px;
  margin: 0px;
  padding: 10px 0;
}
```

Finally, create a JavaScript file named “script.js” in the `exercises/events` folder and copy the code below:

`script.js`

```
function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
}

createDaysOfTheWeek();

// Escreva seu código abaixo.
```

The purpose of these exercises is to put into practice what you've learned about DOM, selectors, handling HTML elements, and JavaScript Events. Therefore, you must do the exercises using only JavaScript code, which must be inserted in the “scripts.js” file.

For better organization, make commits for each completed task. Let's get to the exercises:

## Part 1

- Create a calendar dynamically.
The decemberDaysList array contains the last two days of November and the days of the month of December. Your function should dynamically create each calendar day and add them inside the `<ul>` tag.

- The `<ul>` tag must contain the id 'days'

- The days must be contained in a `<li>` tag, and all must have the day class. Ex: `<li class="day">3</li>`

- The 24th, 25th and 31st are holidays and, in addition to the day class, they must also contain the holiday class. Ex: `<li class="day holiday">24</li>`

- The 4th, 11th, 18th and 25th are Fridays. They must contain the day class and the friday class. Ex: `<li class="day friday">4</li>`

```
const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
```

## Part 2

- Implement a function that dynamically creates a button named “Holidays”.
    - Your function must receive a parameter with the string `'Feriados'`
    - Add to this button the ID `"btn-holiday"`
    - Add this button as child of `<div>` tag with `"buttons-container"` class

## Part 3


- Implement a function that changes the background color of days that have the `"holiday"` class.
    - Add to the `"Feriados"` button a `"click"` event that changes the background color of the days that have the `"holiday"` class
    - 👀 It's interesting that this button also has the inverse logic. When clicked again, it returns to the initial configuration with the color “rgb(238,238,238)”.

## Part 4

- Implement a function that dynamically creates a button named `"Sexta-feira"`.
    - Your function must receive the string “Friday” as a parameter;
    - Add to this button the ID `"btn-friday"`;
    - Add this button as child of `<div> `tag with class "buttons-container".

## Part 5

- Implement a function that modifies the text displayed on days that are Friday. Add a “click” event to the “Sexta-feira” button and modify the text to be displayed on days that are Fridays.
    - 👀 It's interesting that this button also has the inverse logic. When clicked again, it returns to the initial configuration displaying the days.

## Part 6

- Implement two functions that create a “zoom” effect.
    - When hovering the mouse pointer on a day of the month in the calendar, the text for that day should enlarge, and when the mouse pointer leaves the day, the text should return to its original size.

## Part 7

- Implement a function that adds a custom task to the calendar.
    - The function must receive as a parameter the string with the name of the task (eg “cozinhar”) and dynamically create an element with the `<span>` tag containing the task.
    - The created element must be added as a child of the `<div>` tag that has the `"my-tasks"` class.

## Part 8

- Implement a function that adds a colored caption to the task.
    - This function must receive as a parameter a string ('color') and dynamically create a `<div>` tag element with the `task` class
    - The color parameter must be used as the background color of the created `<div>`
    - The created element must be added as a child of the `<div>` tag that has the `"my-tasks"` class

## Part 9

- Implement a function that selects a task.
    - Add an event that, when clicking on the element with the `<div>` tag referring to the color of your task, assigns to this element the `task selected` class, that is, when your task has the task class selected it will be selected
    - When clicking on the element again, its class should go back to being just a `task`, that is, this task is no longer a selected task.

## Part 10

- Implement a function that assigns the task color to the calendar day.
    - Add an event that, when clicking on a day of the month in the calendar, assigns that day the caption color of your selected task.
    - When clicking again on the day with the legend color, its color should return to the initial setting rgb(119,119,119)

## Bonus

- Shall we add appointments to your calendar? Implement a function that, when typing an appointment in the “COMPROMISSOS” text box, adds the item to the “MEUS COMPROMISSOS” list by clicking the “ADICIONAR” button.
    - If no characters are entered in the `input` field, the function should return an `alert` with an error message when clicking “ADD”.
    - When pressing the “enter” key, the event must also be triggered.