const axios = require('axios');

const url = 'https://v2.jokeapi.dev/joke/Any?type=single&amount=30';

fetch(url)
  .then(res => res.json())
  .then(data => {
    data.jokes.forEach(joke => {
      console.log(joke.joke);
    });
  })
  .catch(err => console.error(err));
