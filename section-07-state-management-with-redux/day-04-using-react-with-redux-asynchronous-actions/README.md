# What are we going to learn?

Today, we'll focus on the data flow of a **Redux** application. You must have realized that **Redux** only supports synchronous data flow, that is, only information and data already ready in our application.

An `action` is a JavaScript object that describes some event that has already happened, this object is sent to the `reducer` so that the global state is updated.

But, what if an asynchronous `action` was needed, which needs to make a request to an API, so that the necessary data is present to, only then, change the global state?

The function responsible for changing the global state is the `reducer`, which is a synchronous and pure function. This means that the `reducer` function does not support asynchrony (by promises, for example) or side effects.

In order for us to achieve asynchronicity in **Redux**, we can create asynchronous `actions` (also called thunks). And this is possible through the `redux-thunk` library.

**You will be able to:**
- Create asynchronous `actions` in your application with **Redux**.
- Using the `redux-thunk` library.
- Understand what `middleware` is in **Redux**.