const { mergeBreeds } = require("../solutions/mergeBreeds.js");
// const { mergeBreeds } = require("../katas/mergeBreeds.js");

const breedListOne = {
  Bulldog: {
    pets: ["Spot", "Tim", "Odie"],
  },
  "German Shepherd": {
    pets: ["Sarge", "Master", "Thor"],
  },
  Dachshund: {
    pets: ["Squeaky", "Don", "Mr Snuggles"],
  },
};

const breedListTwo = {
  Chihuahua: {
    pets: ["Taco", "Biggie"],
  },
  Dachshund: {
    pets: ["Happy", "Jane"],
  },
  Rottweiler: {
    pets: ["Bear", "Tiny", "Fluffy"],
  },
};

test("mergeBreeds", () => {
  const mergedBreeds = mergeBreeds(breedListOne, breedListTwo);
  expect(mergedBreeds).toMatchInlineSnapshot(`
    Object {
      "Bulldog": Object {
        "pets": Array [
          "Spot",
          "Tim",
          "Odie",
        ],
      },
      "Chihuahua": Object {
        "pets": Array [
          "Taco",
          "Biggie",
        ],
      },
      "Dachshund": Object {
        "pets": Array [
          "Squeaky",
          "Don",
          "Mr Snuggles",
          "Happy",
          "Jane",
        ],
      },
      "German Shepherd": Object {
        "pets": Array [
          "Sarge",
          "Master",
          "Thor",
        ],
      },
      "Rottweiler": Object {
        "pets": Array [
          "Bear",
          "Tiny",
          "Fluffy",
        ],
      },
    }
  `);
});
