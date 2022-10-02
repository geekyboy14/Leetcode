/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {

    let arraySize = numbers.length - 1;
    let initialSize = 0;

    for (let i = 0; i < numbers.length; i++) {

        let start = numbers[initialSize]
        let end = numbers[arraySize]
        let sum = start + end;

        if (sum > target) {
            arraySize--;
        }
        else if (sum < target) {
            initialSize++;
        }
        else if (initialSize === arraySize) {
            return []
        }
        else if (sum === target) {
            return [initialSize + 1, arraySize + 1]
        }
    }
};