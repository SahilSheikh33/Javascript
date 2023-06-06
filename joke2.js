const axios = require('axios');

const url = 'https://v2.jokeapi.dev/joke/Any?type=single&amount=30';
const categories = ['Programming', 'Misc', 'Dark', 'Pun', 'Spooky', 'Christmas'];
const categoryCounts = {};
fetch(url)
  .then(res => res.json())
  .then(data => {
    data.jokes.forEach(joke => {
      const category = joke.category;
      if (categories.includes(category)) {
        categoryCounts[category] = (categoryCounts[category] || 0) + 1;
        console.log(`[${category}]:= ${joke.joke}`);
      }
    });
    console.log(categoryCounts);
  })
  .catch(err => console.error(err));


  // categoryCounts[category] = (categoryCounts[category] || 0) + 1;
 // console.log(`[${category}] ${joke.joke}`);