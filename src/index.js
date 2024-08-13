module.exports = function check(str, bracketsConfig) {
  const stack = [];
    const openBrackets = {};
    const closeBrackets = {};

    for (const [open, close] of bracketsConfig) {
        openBrackets[open] = close;
        closeBrackets[close] = open;
    }
    for (let char of str) {
        if (openBrackets[char]) {
            if (char === openBrackets[char] && stack[stack.length - 1] === char) {
                stack.pop();
            } else {
                stack.push(char);
            }
        } else if (closeBrackets[char]) {
            if (stack.length === 0 || stack.pop() !== closeBrackets[char]) {
                return false; 
            }
        }
    }
    return stack.length === 0;
}
