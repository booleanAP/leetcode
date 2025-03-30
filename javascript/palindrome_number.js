// https://leetcode.com/problems/palindrome-number/description/

/*
    Completed 3/29/25
*/
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let reverse = x.toString().split('').reverse().join('');
    return x.toString() === reverse;
};



console.log(isPalindrome(121)); // true
console.log(isPalindrome(-121)); // false
console.log(isPalindrome(10)); // false
console.log(isPalindrome(-101)); // false
console.log(isPalindrome(12321)); // true