
/**
 * @param {string} input
 * @return {string}
 */
var removeOuterParentheses = function (input) {
    const parenthesisToMathOperation = new Map([['(', 1], [')', -1]]);
    const outermostParenthesesOfEveryPrimitiveStringRemoved = new Array();

    let balance = 0;
    let startIndexSubstring = 0;
    let endIndexSubstring = 0;

    for (let parenthesis of input) {
        balance += parenthesisToMathOperation.get(parenthesis);
        if (balance === 0) {
            outermostParenthesesOfEveryPrimitiveStringRemoved
                    .push(input.substring(startIndexSubstring + 1, endIndexSubstring));
            startIndexSubstring = endIndexSubstring + 1;
        }
        ++endIndexSubstring;
    }
    return outermostParenthesesOfEveryPrimitiveStringRemoved.join('');
};
