// https://leetcode.com/problems/button-with-longest-push-time/description/

/*
    Learned
        - Trying to comprehend the problem statement is often the hardest part of the task.

        -- Once understanding the problem using a comment from the discussion, it was earier to solve.
            "
                Here's a way to visualize the problem to hopefully make it clearer:

                Imagine a keyboard whose keys are extremely heavy and require a lot of force to press. So, instead of quickly pressing a key, you start applying force and keep pushing it until it's all the way down.

                Example:
                Let's say the first element in events is [3, 8]. This means, at t = 0, you start applying downward force on button 3 and it becomes fully pressed at t = 8. So, it took you 8 seconds to press it. If, at a later time, it takes you longer than 8 seconds to press this button, set the duration to the max value encountered. The problem is then finding the button that was "hardest" to press, e.g. that required the most force, or energy.

                This is –without a doubt– one of the worst problem descriptions I've seen on LeetCode. Figuring out what the problem actually means is 99% of the way to the solution.
            "
*/

/**
 * @param {number[][]} events
 * @return {number}
 */
var buttonWithLongestTime = function (events) {
    if (events.length === 1) return events[0][0];

    let index = events[0][0];
    let maxTime = events[0][1];
    for (let i = 1; i < events.length; i++) { 
        const time = events[i][1] - events[i - 1][1];
        if (time > maxTime) {
            maxTime = time;
            index = events[i][0];
        } else if (time === maxTime) {
            index = Math.min(index, events[i][0]);
        }
    }
    return index;
};

console.log(buttonWithLongestTime([[1, 2], [2, 3], [3, 4]])); // Output: 1
console.log(buttonWithLongestTime([[10, 5], [1, 7]])); // Output: 10
console.log(buttonWithLongestTime([[1, 2], [2, 5], [3, 9], [1, 15]])); // Output: 1