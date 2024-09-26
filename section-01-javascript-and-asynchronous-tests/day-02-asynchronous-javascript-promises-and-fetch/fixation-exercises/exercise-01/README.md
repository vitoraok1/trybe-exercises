# Exercise 01

## Microblogs

In this exercise we are going to create a page for reading posts from several people. You will already start with a structured HTML page and some helper functions ready.

Your goal will be to fill the existing HTML with the information that you will retrieve from several different APIs. At the end, your application should be able to display a list of people, display a list of posts according to the selected person and also display the comments of the highlighted post. Each item in this list (people, posts and comments) will be retrieved through a call to a different API.

Did you like the challenge? So let's go through the necessary steps to develop the exercise:

1. `Fetch` the `https://dummyjson.com/users` API to retrieve the user information. After receiving the data, pass the *array* returned by the API with the information of the users to the `fillUsersSelect` function so that the page *select* is updated.
2. In the initial structure of the project, there is already an *eventListener* for the change event of the select that triggers the `clearPage` function. After calling this function, `fetch` the API `https://dummyjson.com/posts/user/{userID`}. Remember that you must get the id of the selected person through the `value` attribute of the *select*.
3. The request made in the previous item will return an *array* with the posts of the selected person. After receiving the information from the API, use the `fillPosts` function, passing the list of *posts* received, to display the posts on the screen. ℹ️ The first item in the *array* will be the highlighted *post*. The other *posts* enter the list of related *posts*.
4. Still using the list of posts returned by the request in item 2, get the `id` of the first post in the list (this will be the featured *post*) and make a request to the *URL* `https://dummyjson.com/posts/{featuredPost.id}/comments` to get the comments for the highlighted post. 💡Tip: remember to use `return` and return this *fetch* call. This way it will be possible to chain one more `.then` in sequence.
5. After receiving the comments for the first post from the API, use the `fillFeaturedPostComments` function to display them. You must pass to this function the *array* of comments received in the API return.
6. Add a `.catch` to the end of every `.then` chain. If an error occurs, this `.catch` must call the `fillErrorMessage` function and pass the error message.



