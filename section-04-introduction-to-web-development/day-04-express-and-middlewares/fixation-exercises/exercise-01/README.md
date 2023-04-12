# Exercise 01

## Now the practice

1. An Ecotourism startup approached you to build a back-end application that helps create and share unrecorded places in nature. The objective is to enhance and promote Brazil's tourism capacity and the main API requirements that this startup requested are:

- Register new ecotourism activities with the following information:

  - Name of the activity;
  - Price;
  - Description: containing evaluation, difficulty and creation date of the activity.

Analyzing the requirements above, the Tech Lead person identified the following keys for the requisition:


```
{
  "name": "Trekking",
  "price": 0,
  "description": {
    "rating": 5,
    "difficulty": "Fácil",
    "createdAt": "10/08/2022"
  }
}
```

- Create a Node.js server using the Express framework with the initial structure of `app.js` and `server.js` and prepare the environment by installing the `nodemon` library.


- Add a middleware created by the community that interprets `JSON` content.


- Create a `POST` endpoint with the `/activities` route to add new activities. She must:
  - Return status `201` and a success message when the activity has been inserted (json format);
  - Suggestion: `{ "message": "Activity successfully registered!" }`.


- Create a validation middleware for the `name` key. She must:

  - Be mandatory;
  - Return status `400` and a message in json format;
      - Suggestion: `{ "message": "The name field is required" }`.
  - Have more than 4 characters;
  - Return status `400` and a message in json format;
      - Suggestion: `{ "message": "The name field must have at least 4 characters" }`.


- Create a validation middleware for the `price` key. She must:

  - Be mandatory;
  - Return status `400` and a message in json format;
    - Suggestion: `{ "message": "The price field is mandatory" }`.
  - Be a number greater than or equal to zero;
  - Return status `400` and a message in json format;
    - Suggestion: `{ "message": "The price field must be a number greater than or equal to zero" }`.


- Create a validation middleware for the `description` key that has the `createdAt`, `rating` and `difficulty` keys. She must:

  - Have all the mandatory keys;
  - Return status `400` for all and a message in json format;
    - Suggestion: `{ "message": "The description field is required" }`;
    - Suggestion: `{ "message": "The createdAt field is mandatory" }`;
    - Suggestion: `{ "message": "The rating field is required" }`;
    - Suggestion: `{ "message": "The difficulty field is mandatory" }`.


- Create a validation middleware for the `createdAt` key. She must:

  - Have a valid date in the format `dd/mm/yyyy`;
  - Return status `400` and a message in json format;
    - Suggestion: `{ "message": "The createdAt field must have the format \'mm/dd/yyyy\'" }`.


- Create a validation middleware for the `rating` key. She must:

  - Have an integer between 1 and 5;
  - Return status `400` and a message in json format;
    - Suggestion: `{ "message": "The rating field must be an integer between 1 and 5" }`.


- Create a validation middleware for the `difficulty` key. She must:

  - Have only 3 classifications: “Easy”, “Medium” or “Difficult”;
  - Return status `400` and a message in json format;
    - Suggestion: `{ "message": "The difficulty field must be \'Easy\', \'Medium\' or \'Difficult\'" }`.


2. Congratulations! Your client was very satisfied with the work and requested some more requirements for you to implement. See below:


- Register users of ecotourism activities with the following information:

  - Email;
  - Password;
  - First name;
  - Telephone;


- Allow only registered people to register new ecotourism activities.


- Create a POST endpoint with the /signup route to register user users. She must:

  - Must have the email, password, firstName and phone fields;
  - If the fields are not filled in, return status 401 - Unauthorized and a message (json format);
    - Suggestion: { "message": "Missing fields!" }.
  - Generate a valid random token;
  - Return status 200 and a message containing the token (json format);
    - Suggestion: { token: '<random-token>' }.


Keep an eye on the tip👀: To generate the token, you can use the randomBytes function, from Node's crypto module, like this:


```
const crypto = require('crypto');

function generateToken() {
  return crypto.randomBytes(8).toString('hex');
}

module.exports = generateToken;
```


- Create an authentication middleware to the `POST` endpoint with the `/activities` route. She must:

  - Be validated through the token that was generated when carrying out the `signup`;
  - Be found by the `Authorization` header;
  - Have exactly 16 characters;
  - If the token is invalid or nonexistent, return the status `401 - Unauthorized` and a message (json format);
    - Suggestion: `{ "message": "Invalid token!" }`.
