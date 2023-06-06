// Function to fetch a random joke from the API
function fetchJoke() {
    return new Promise((resolve, reject) => {
      // Simulating API call and response
      setTimeout(() => {
        const joke = "Well, with == I kind of guess, but with === I'm really sure."
        
        resolve(joke);
      }, 2000); // Simulating a 2-second delay
    });
  }
  
  // Fetch two jokes and check if they are of the same type
  Promise.all([fetchJoke(), fetchJoke()])
    .then(([joke1, joke2]) => {
      const isSameType = typeof joke1 === typeof joke2;
      console.log("Joke 1:", joke1);
      console.log("Joke 2:", joke2);
      console.log("Are both jokes of the same type?", isSameType);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  