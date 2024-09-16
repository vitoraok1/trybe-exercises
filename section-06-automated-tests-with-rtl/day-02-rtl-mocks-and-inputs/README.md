## Introduction

You've already learned how to use the main tools that `react-testing-library` offers. Now let's understand more about mocks!

Mock functions are tools that allow us to simulate the behavior of real functions.

Imagine the following scenario: in a test, you have functions with variable returns, such as requests to APIs, in addition to other random return functions. There's no way to test whether they, or the logic that depends on them, are actually working. If we think of a request for an API, it may be down or, depending on the response, the test will sometimes pass and sometimes not.

To work around this problem, we can simulate these behaviors in the context of the test. In Jest and RTL, Mock functions simulate the behavior of a real function only in the test scope and give us control over what return that function sends, how many times it was called, and more.