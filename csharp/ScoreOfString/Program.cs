// https://leetcode.com/problems/score-of-a-string/description/?envType=problem-list-v2&envId=2szmh3kt
/*
    Learned:
        - You can get character values by doing string[i]
*/

Console.WriteLine(ScoreOfString("hello"));
Console.WriteLine(ScoreOfString("zaz"));

public int ScoreOfString(string s)
{
    int score = 0;
    for (int i = 0; i < s.Length - 1; i++)
    {
        score += Math.Abs(s[i] - s[i + 1]);
    }
    return score;
}


