// https://leetcode.com/problems/longest-common-prefix/description/


/*
    Completed 3/29/25
    Learned:
        - Getting the length of the prefix every loop is not as effecient, save it as a variable. 
        - Looping through and subtracting the length of this variable makes the next checks that much faster.
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let prefix = "";

    for (let i = 0; i < strs.length; i++) {
        let currentStr = strs[i];

        // Set prefix to the first string, as it is the longest by itself.
        if (i === 0) {
            prefix = currentStr;
        }
        else {
            if (prefix.length === 0) {
                break; // No common prefix found
            }

            // Compare prefix with current sting
            let j = 0;
            while (j < prefix.length && j < currentStr.length && prefix[j] === currentStr[j]) {
                j++;
            }
            prefix = currentStr.slice(0, j);
        }
    }
    return prefix;
};


console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // Output: ""