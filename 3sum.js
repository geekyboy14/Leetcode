/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {

    let resultArray = []
    let hashMap = {}


    nums = nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {

        let initialNumber = nums[i]
        let arraySize = nums.length - 1;
        let initialSize = i + 1;


        while (arraySize > initialSize) {
            let start = nums[initialSize];
            let end = nums[arraySize];


            let sum = start + end;

            if ((0 - initialNumber) === sum) {
                // triplet
                if (hashMap[nums[i] + '' + nums[initialSize] + '' + nums[arraySize]] === undefined) {
                    resultArray.push([nums[i], nums[initialSize], nums[arraySize]])
                    hashMap[nums[i] + '' + nums[initialSize] + '' + nums[arraySize]] = nums[i] + '' + nums[initialSize] + '' + nums[arraySize]
                }
                initialSize++;
                arraySize--;
            }
            else if (sum < (0 - initialNumber)) {
                initialSize++;
            }
            else if (sum > (0 - initialNumber)) {
                arraySize--;
            }
        }
    }

    return resultArray;
};