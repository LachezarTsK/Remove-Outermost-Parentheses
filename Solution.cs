
using System;

public class Solution
{
    private static readonly Dictionary<char, int> parenthesisToMathOperation
        = new Dictionary<char, int>() { { '(', 1 },{ ')', -1 } };

    public string RemoveOuterParentheses(string input)
    {
        StringBuilder outermostParenthesesOfEveryPrimitiveStringRemoved = new StringBuilder();
        int balance = 0;
        int startIndexSubstring = 0;
        int endIndexSubstring = 0;

        foreach (char parenthesis in input)
        {
            balance += parenthesisToMathOperation[parenthesis];
            Console.WriteLine(startIndexSubstring + " " + endIndexSubstring);
            if (balance == 0)
            {
                outermostParenthesesOfEveryPrimitiveStringRemoved
                        .Append(input.Substring
                        (startIndexSubstring + 1, endIndexSubstring - startIndexSubstring - 1));
                startIndexSubstring = endIndexSubstring + 1;
            }
            ++endIndexSubstring;
        }
        return outermostParenthesesOfEveryPrimitiveStringRemoved.ToString();
    }
}
