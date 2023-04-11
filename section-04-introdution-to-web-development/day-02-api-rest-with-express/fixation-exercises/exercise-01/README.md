# Exercise 01

## Now the practice

1. What is the function of status code `400` and `422`?

2. What is the function of status code `401`?

Create the `src` directory and inside it a `movies.json` file with the movies from our video store:

```
[
  {
    "id": 1,
    "movie": "Avatar",
    "price": 5
  },
   {
    "id": 2,
    "movie": "Gente Grande",
    "price": 2
  },
  {
    "id": 3,
    "movie": "O Jogo",
    "price": 3
  },
  {
    "id": 4,
    "movie": "Quebrando a Banca",
    "price": 5
  },
  {
    "id": 5,
    "movie": "Lilo & Stitch",
    "price": 2
  },
  {
    "id": 6,
    "movie": "Os Fantasmas se Divertem",
    "price": 2
  },
  {
    "id": 7,
    "movie": "Meninas Malvadas",
    "price": 3
  }
]
```

Now do the following exercises:

3. Create a Node.js server using the Express framework.

4. Create a JSON reading function with the *fs* module.

5. Create a `GET` type endpoint with the `/movies/:id` route, which can list a JSON movie by `id`.

6. Create a `GET` type endpoint with the `/movies` route, which can list all JSON movies.

7. Create a `POST` type endpoint with the `/movies` route, to register a new movie in JSON.

The body of the request must have the following format:


```
{
  "movie": "Vingadores",
  "price": 5
}
```

8. Create a `PUT` type endpoint with `/movies/:id` route, which can edit JSON movie information.

The body of the request must have the following format:


```
{
  "movie": "Vingadores: Ultimato",
  "price": 5
}
```

9. Create a `DELETE` type endpoint with the `/movies/:id` route that can delete a movie from the JSON.

10. Create a `GET` type endpoint with the `/movies/search` route, which can list all JSON movies.

  - The route must receive the information via `query` and the key must be called `q`. The key will bring the value of 'people' for example, and the filter should only bring movies with that term, if not found, bring an empty *array*.