const { breedListOne, breedListTwo } = require("../__fixtures__/breedLists");
const { mergeBreeds } = require("../solutions/mergeBreeds.js");
// const { mergeBreeds } = require("../exercises/mergeBreeds.js");

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
          "Squeeky",
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
