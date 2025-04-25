// https://leetcode.com/problems/return-length-of-arguments-passed/description/

// Learned:
//  - TypeScript allows you to define a function that accepts a variable number of arguments using the rest parameter syntax (...args: type[]).

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };

function argumentsLength(...args: JSONValue[]): number {
    return args.length; 
};


console.log(argumentsLength(1, 2, 3)); // 3
console.log(argumentsLength(1, 2, 3, 4)); // 4
console.log(argumentsLength({}, null, "3")); // 3