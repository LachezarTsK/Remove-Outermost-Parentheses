
function removeOuterParentheses(input: string): string {
    const parenthesisToMathOperation: Map<string, number> = new Map([['(', 1], [')', -1]]);
    const outermostParenthesesOfEveryPrimitiveStringRemoved: string[] = new Array();

    let balance: number = 0;
    let startIndexSubstring: number = 0;
    let endIndexSubstring: number = 0;

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
