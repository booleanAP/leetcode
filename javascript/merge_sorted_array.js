// https://leetcode.com/problems/merge-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150

/*
    Learned:
        - Probably a bit verbose here.
*/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let newArray = [];

    let i = 0; // pointer for nums1
    let j = 0; // pointer for nums2

    while (i + j < m + n) {
        if (i === m) {
            newArray.push(nums2[j]);
            j++;
            continue;
        }
        if (j === n) {
            newArray.push(nums1[i]);
            i++;
            continue;
        }

        let num1 = nums1[i];
        let num2 = nums2[j];

        if (num1 < num2) {
            newArray.push(num1);
            i++;
        }
        else if (num1 > num2) {
            newArray.push(num2);
            j++;
        } else {
            // if they are equal
            newArray.push(num1);
            newArray.push(num2);
            i++;
            j++;
        }
    }

    // return newArray;
    for (let k = 0; k < newArray.length; k++) {
        nums1[k] = newArray[k];
    }
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)); // [1,2,2,3,5,6]
console.log(merge([1], 1, [], 0)); // [1]
console.log(merge([0], 0, [1], 1)); // [1]