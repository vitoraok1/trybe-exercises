# Exercise 02

## TrybeMail

In this exercise, we are going to develop an application that renders a list of emails. The application must allow it to be possible to mark an email as read or unread.

When all the emails in the list are read, an alert should be displayed informing that all messages have been read!

To perform this exercise you must:

  - Use only functional components;
  - Manage application state using the useState hook;
  - Your application must save a list of received emails in the state;
  - Each email received must have the following structure:

```
{
  id: 1,
  title: "Email Title",
  status: 0
}
```

- Use `status: 0` for unread emails and `status: 1` for read emails;
- Each email in the list should be rendered along with two buttons: one to mark the email as read and another to mark it as unread;
- In addition to the email list, there should also be two control buttons: one to mark all emails as read and another to mark all emails as unread;
- Use the `useEffect` hook to “monitor” changes to the state-saved mailing list;
- Whenever all emails in the list are marked as “read”, display an `alert` with the message: “Congratulations! You read all your messages!”


Below is an example of how your application should behave:

![Example Gif](./images/d601c12f-51df-4f4e-bf51-e8d90f263c22-Exemplo%20da%20aplica%C3%A7%C3%A3o%20TrybeMail.gif)


