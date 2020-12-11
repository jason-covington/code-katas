/**
 * Merge breedList1 into breedListTwo. If there are matching keys, merge their pet lists
 **/

const mergeBreeds = (obj1, obj2) => {
  const merged = {};

  for (let breed in obj1) {
    if (obj2[breed]) {
      merged[breed] = {
        pets: [...obj1[breed].pets, ...obj2[breed].pets],
      };
    } else {
      merged[breed] = {
        ...obj1[breed],
        ...obj2[breed],
      };
    }
  }

  return { ...obj2, ...merged };
};

module.exports = { mergeBreeds };
