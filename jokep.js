const axios = require('axios');
const url = 'https://v2.jokeapi.dev/joke/Any?type=single&amount=10';
const categories = ['Programming', 'Misc', 'Dark', 'Pun', 'Spooky', 'Christmas'];
const categoryCounts = {};
fetch(url)
  .then(res => res.json())
  .then(data => {
    data.jokes.forEach(joke => {
      const category=joke.categories;
      if (categories.includes(category)) {
        categoryCounts.categories = (categoryCounts[categories] || 0) + 1;
      }
    });
      console.log(category);
    })
  .catch(err => console.error(err));
