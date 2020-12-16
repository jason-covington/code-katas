/*
 * Given an array of N integers, you have to find how many
 * times you have to add up the smallest numbers in the array
 * until their Sum becomes greater or equal to K.
 *
 * Notes:
 * - List size is at least 3.
 * - All numbers will be positive.
 * - Numbers could occur more than once , (Duplications may exist).
 * - Threshold K will always be reachable.
 */

const minimumSteps = (numbers, value) => {
  const sortedNumbers = [...numbers].sort((a, b) => a - b);
  let count = 0,
    currSum = sortedNumbers[0];

  for (let i = 1; i < sortedNumbers.length; i++) {
    if (currSum >= value) {
      return count;
    }
    count++;
    currSum += sortedNumbers[i];
  }
  return count;
};

module.exports = { minimumSteps };
