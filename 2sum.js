/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {

    let sumDiffernce = 0;
    let hashMap = {}
    for (let i = 0; i < nums.length; i++) {
        sumDifference = target - nums[i];
        if (hashMap[sumDifference] != undefined) {
            return [hashMap[sumDifference], i]
            break;
        }
        else {
            hashMap[nums[i]] = i;
        }
    }
};