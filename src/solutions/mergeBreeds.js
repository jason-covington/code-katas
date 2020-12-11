/**
 * Merge breedListOne into breedListTwo. If there are matching keys, merge their pet lists
 **/

const mergeBreeds = (list1, list2) => {
  const merged = { ...list2 };

  Object.keys(list1).forEach((breed) => {
    if (list2[breed]) {
      merged[breed] = {
        pets: [...list1[breed].pets, ...list2[breed].pets],
      };
    } else {
      merged[breed] = {
        ...list1[breed],
      };
    }
  });

  return merged;
};

module.exports = { mergeBreeds };
