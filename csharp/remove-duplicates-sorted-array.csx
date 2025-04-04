// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

/*
    Learned:
        - Only need to keep one count, because once it gets passed it, it does not matter how many duplicates are in a row because it is ordered
*/

using System.Diagnostics;
using Internal;

public int RemoveDuplicates(int[] nums) {
    int correctNumbers = 1;
    if (nums.Length == 0) return 0;

    for (int i = 1; i < nums.Length; i++) {
        if (nums[i] != nums[i - 1]) {
            nums[correctNumbers] = nums[i];
            correctNumbers++;
        }
    }
    return correctNumbers;
}


public void WriteTest(int[] nums, int[] expectedNums) {
    Console.WriteLine("TEST BEGIN");
    Console.WriteLine("*******************************************");
    Console.WriteLine($"Initial Nums: {string.Join(", ", nums)}");
    Console.WriteLine($"Expected Nums: {string.Join(", ", expectedNums)}");

    int k = RemoveDuplicates(nums);
    Console.WriteLine($"Result: {k}");
    Console.WriteLine($"Result Nums: {string.Join(", ", nums)}");
    Console.WriteLine();
    Console.WriteLine("Asserts");
    Console.WriteLine($"Output expected lenth ({k} = {expectedNums.Length})? " + (k == expectedNums.Length));
    for (int i = 0; i < k; i++) {
        Console.WriteLine($"Checking index {i}:  {nums[i] == expectedNums[i]}");
    }
    Console.WriteLine("*******************************************");
    Console.WriteLine("TEST END");
    Console.WriteLine();
}

WriteTest(new int[] { 1, 1, 2 }, new int[] { 1, 2 });
WriteTest(new int[] { 0, 0, 1, 1, 1, 2, 2, 3, 3, 4 }, new int[] { 0, 1, 2, 3, 4 });
