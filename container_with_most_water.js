/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let maxarea = 0;
    let right = height.length - 1;
    let left = 0;
    while (left < right) {
        let width = right - left;
        maxarea = Math.max(maxarea, (Math.min(height[right], height[left]) * width));
        if (height[left] >= height[right]) {
            right--;
        }
        else {
            left++;
        }
    }

    return maxarea;
};