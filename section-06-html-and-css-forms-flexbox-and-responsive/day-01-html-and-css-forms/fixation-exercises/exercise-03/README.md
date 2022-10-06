# Exercise 03

## Creating a form to apply for a trip

Imagine that you are surfing the internet. You are now a developer, tired after finally finishing your studies and thinking about your wonderful and well-deserved vacation.

Then you come across an advertisement for the TrybeTrip contest, which rewards you with a fully paid trip and multiple destination options. How do you imagine the page to compete for this trip would be?

Do you agree that it would be a kind of form?

The exercise today will be to develop a web page with the TrybeTrip form. Develop it into a file called `form.html`. The structure of your page should look similar to the image below.

![layout page](./images/Formato%20do%20Formul%C3%A1rio%20TrybeTrip.webp)
`TrybeTrip Form Format.`

*Hints:*

- Create the habit of adding IDs to unique elements and classes to elements with similar behavior, as this will make your life a lot easier as a developer;

- Find out more about the `<label>` and `<fieldset>` Tags by clicking on the following documentation:
    - [Label;](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/label)
    - [Fieldset.](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/fieldset)

- The form must allow the user to enter the following fields:

- Full name:
    - Limited between 10 and 40 characters.

- Email:
    - Limited between 10 and 50 characters.

- Preferred Destination:
    - 4 options: City, Countryside, Beach, Mountains.

- Why should you be the developer to win the TrybeTrip contest?
    - Limit of 500 characters.
What is the best date to make your trip?

- Would you like to receive other amazing opportunities offered by Trybe?

- I agree that images from my vacations may be used to publicize future contests.

These will be the main fields used in the next exercises.

- Create a button to send the filled information.

Now let's use some javascript. To do this, create the `script.js` file and reference it in the HTML.

- Tip: Put the `<script>` tag at the end of your body.

- Interrupt the default behavior of the submit button using the `preventDefault()` method.

- Create a button that clears the information contained in the fields.

- (Bonus) TrybeTrip really needs photos to publicize their contests. With this in mind, ensure that only those who authorize the use of images can submit their information.

- (Bonus) Validate the character limit fields. If they are not as expected when clicking the submit button, an alert should be shown with the message: 'Invalid Data'. Otherwise, the message 'Data successfully sent! Thank you for participating in the TrybeTrip contest.' should appear on the screen.

