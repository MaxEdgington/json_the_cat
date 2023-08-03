const request = require("request");

const fetchBreedDescription = function(breedName, callback) {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName.trim()}`,
    (error, response, body) => {
      if (error) {
        callback(error,null);
      }

      if (response !== {}) {
        const data = JSON.parse(body);
        const breed = data[0];
        if (breed) {
          callback(null, breed.description);
        } else {
          callback(`Failed to find breed ${breedName.trim()}`, null);
        }
      }

      

    }
  );
};

module.exports = { fetchBreedDescription };

/*


const request = require("request");

let search = "";
const arg = process.argv;
const arr = arg.slice(2, arg.length);
for (let argu of arr) {
  search += argu + " ";
}

request(
  `https://api.thezatapi.com/v1/breeds/search?c=${search.trim()}`,
  (error, response, body) => {
    if (error) {
      return console.log(error);
    }

    if (response !== {}) {
      const data = JSON.parse(body);
      const breed = data[0];
      if (breed) {
        console.log(breed.description);
      } else {
        console.log(`Failed to find breed ${search.trim()}`);
      }
    }
  }
);



*/
/*

request(
  `https://api.thecatapi.com/v1/breeds/search?q=${search.trim()}`,
  (error, response, body) => {
    //console.log(response);
    //console.log("error:", error); // Print the error if one occurred
    //console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
   // console.log("body:", body); // Print the HTML for the Google homepage.
    //console.log(typeof body);
    const data = JSON.parse(body);
    //console.log(data);
    // console.log(typeof data);
    //console.log(data[0].description);
    
  }
);

*/

/*

const breed = data[0];
  if (breed) {
    console.log(breed.description);
  } else {
    console.log(`Failed to find breed ${breedName}`);
  }

  */
