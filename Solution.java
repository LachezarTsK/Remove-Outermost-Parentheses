
import java.util.Map;

public class Solution {

    private static final Map<Character, Integer> parenthesisToMathOperation = Map.of('(', 1, ')', -1);

    public String removeOuterParentheses(String input) {
        StringBuilder outermostParenthesesOfEveryPrimitiveStringRemoved = new StringBuilder();
        int balance = 0;
        int startIndexSubstring = 0;
        int endIndexSubstring = 0;

        for (char parenthesis : input.toCharArray()) {
            balance += parenthesisToMathOperation.get(parenthesis);
            if (balance == 0) {
                outermostParenthesesOfEveryPrimitiveStringRemoved
                        .append(input.substring(startIndexSubstring + 1, endIndexSubstring));
                startIndexSubstring = endIndexSubstring + 1;
            }
            ++endIndexSubstring;
        }
        return outermostParenthesesOfEveryPrimitiveStringRemoved.toString();
    }
}
