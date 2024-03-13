
#include <string>
#include <unordered_set>
using namespace std;

class Solution {

    inline static const unordered_map<char, int> parenthesisToMathOperation
    { { '(', 1, }, { ')', -1 } };

public:
    string removeOuterParentheses(const string& input) const {
        string outermostParenthesesOfEveryPrimitiveStringRemoved;

        int balance = 0;
        size_t startIndexSubstring = 0;
        size_t endIndexSubstring = 0;

        for (const auto& parenthesis : input) {
            balance += parenthesisToMathOperation.at(parenthesis);
            if (balance == 0) {
                outermostParenthesesOfEveryPrimitiveStringRemoved
                    .append(input.substr
                    (startIndexSubstring + 1, endIndexSubstring - startIndexSubstring - 1));
                startIndexSubstring = endIndexSubstring + 1;
            }
            ++endIndexSubstring;
        }
        return outermostParenthesesOfEveryPrimitiveStringRemoved;
    }
};
