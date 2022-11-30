# Exercise 01

## To Consolidate

- Create a new project using `npx create-react-app my-form-1.0`.

- Create a form that contains the following elements: a `select` field, two `inputs` of different type and a `textarea` . Once this is done, make one of these elements a controlled component, that is, a form element controlled by the State.

- Download the [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) and see the data, inserted in the controlled element, being saved in the *State*.

- Make all your component elements of the form, created in the previous exercises, be 100% controlled. For that, build a generic *event handler* to handle them.

- Add a `checkbox` type `input` to your form, and ensure that your `event handler` is handling this case correctly.

- In the React documentation (first link in the Additional Resources section!), search about forms and read how to add an `input` to **files**. Once that's done, add an `input` to your form.

- Encapsulate some of your fields in a `fieldset`. To do this, first understand how it works by reading the [documentation](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/fieldset).

- In your form, created in the previous exercises, make two of your fields child components of your form component. Make sure your state still belongs to the parent component.

- Make validations on the created components.

- Create in the state of the parent component, a field `FormWithErrors` which must be `true`, if any of these components have errors and `false` if the components do not have errors.