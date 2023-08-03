const { fetchBreedDescription } = require("./breedFetcher");

//const breedName = process.argv[2];


let breedName = "";
const arg = process.argv;
const arr = arg.slice(2, arg.length);
for (let argu of arr) {
  breedName += argu + " ";
}



fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log("Error fetch details:", error);
  } else {
    console.log(desc);
  }
});
