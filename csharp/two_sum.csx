// https://leetcode.com/problems/two-sum/description/

/*
    Completed 3/29/25
*/

using Internal;

public class Solution
{
    public int[] TwoSum(int[] nums, int target)
    {
        for (int i = 0; i < nums.Length - 1; i++)
        {
            for (int j = i + 1; j < nums.Length; j++)
            {
                if (nums[i] + nums[j] == target)
                    return [i, j];
            }
        }
        throw new Exception("Not found");
    }
}

var solution = new Solution();
Console.WriteLine(string.Join(", ", solution.TwoSum(new int[] { 2, 7, 11, 15 }, 9))); // [0, 1]
Console.WriteLine(string.Join(", ", solution.TwoSum(new int[] { 3, 2, 4 }, 6))); // [1, 2]
Console.WriteLine(string.Join(", ", solution.TwoSum(new int[] { 3, 3 }, 6))); // [0, 1]
Console.WriteLine(string.Join(", ", solution.TwoSum(new int[] { 1,5,7,10,20,50 }, 60))); // [0, 1]
