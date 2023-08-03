const { fetchBreedDescription } = require("../breedFetcher");
const { assert } = require("chai");

describe("fetchBreedDescription", () => {
  // ## FIRST TEST

  it("returns a string description for a valid breed, via callback", (done) => {
    fetchBreedDescription("Siberian", (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc =
        "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });

  // ## SECOND TEST

  it("returns an error message when non existant breed is passed in, via callback", (done) => {
    fetchBreedDescription("Blep", (err, desc) => {

      const expectedErr = "Failed to find breed Blep";

      // we expect no error for this scenario
      assert.equal(expectedErr, err);

      // compare returned description
      assert.equal(null, desc);

      done();
    });
  });
});
