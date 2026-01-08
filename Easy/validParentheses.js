// https://leetcode.com/problems/valid-parentheses/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const obj = {'(':')','[':']','{':'}'};
    const stack = [];
    for(let letter of s){
        if(obj[stack[stack.length-1]] == letter){
            stack.pop()
        }
        else if(obj[letter]){
            stack.push(letter)
        }
        else{
            return false;
        }
        
    }
    return !stack.length;
};

"([)]"
console.log(isValid("([)]"),false)
console.log(isValid("(]"),false)
console.log(isValid("()[]{}"),true);