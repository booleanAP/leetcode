// https://leetcode.com/problems/roman-to-integer/

/* Learned Notes:
    - I could have skipped the "isSpecialCase" function if I had seen the pattern.
    - The pattern would be that if the current number is less than the next number, then we subtract it instead of adding it.
        This would have let the loop be a lot simpler, like so:
            if (romanNumbers[s[i]] < romanNumbers[s[i + 1]]) {
                result -= romanNumbers[s[i]];
            } else {
                result += romanNumbers[s[i]];
            }
*/


// Given a roman numeral, convert it to an integer.
const romanNumbers = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
}

function isSpecialCase(current, next) {
    switch (current) {
        case 'I':
            if (next === 'V' || next === 'X') {
                return true;
            }
            break;
        case 'X':
            if (next === 'L' || next === 'C') {
                return true;
            }
            break;
        case 'C':
            if (next === 'D' || next === 'M') {
               return true;
            }
            break;
    }
    return false;
}

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let result = 0;
    let skip = false;
    for (let i = 0; i < s.length; i++) {

        // Skip next iteration if special case was found.
        if (skip) { 
            skip = false; 
            continue; 
        }

        // Get value of current roman numeral.
        let current = romanNumbers[s[i]];

        // Double check for special case.
        if (i + 1 < s.length) {
            if (isSpecialCase(s[i], s[i + 1])) {
                current = romanNumbers[s[i + 1]] - current;
                skip = true;
            }
        }
        result += current;
    }
    return result;
};


console.log(romanToInt("III")); // 3
console.log(romanToInt("IV")); // 4
console.log(romanToInt("LVIII")); // 58
console.log(romanToInt("MCMXCIV")); // 1994