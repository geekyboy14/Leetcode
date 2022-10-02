/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {

    let closestSum = 1000000000000;
    nums = nums.sort((a, b) => a - b)

    for (let i = 0; i < nums.length; i++) {

        let arraySize = nums.length - 1;
        let initialSize = i + 1;

        while (arraySize > initialSize) {

            let start = nums[initialSize]
            let end = nums[arraySize]

            let sum = start + end + nums[i];

            if (sum === target) {
                return sum;
            }

            if (Math.abs(target - sum) < Math.abs(target - closestSum)) {
                closestSum = sum;
            }

            if (sum > target) {
                arraySize--;
            }
            else if (sum < target) {
                initialSize++;
            }
        }
    }

    return closestSum;
};