# Exercise 05

## Object Property Shorthand

Now it's time to practice: change the `getPosition` function using the `shorthand property`.

```
const getPosition = (latitude, longitude) => ({
  latitude: latitude,
  longitude: longitude,
});

console.log(getPosition(-19.8157, -43.9542));
```