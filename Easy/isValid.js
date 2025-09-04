// https://leetcode.com/problems/valid-parentheses/
// Topics 
// String 
// Stack

var isValid = function(s) {
    if(s.length%2){
        return false
    }
    const valid = []
    const obj = {')':'(',']':'[','}':'{'};
    for (let i = 0; i < s.length; i++) {
        const char = s[i]
        if(valid.length && obj[char] == (valid[valid.length-1])){
            // console.log(obj[char])
            valid.pop()
        }
        else{
            valid.push(s[i])
        }
        
    }
    return !valid.length
};

console.log(isValid("()[]{}"),true)

console.log(isValid(""), "=> expected true");
console.log(isValid("()"), "=> expected true");
console.log(isValid("[]"), "=> expected true");
console.log(isValid("{}"), "=> expected true");
console.log(isValid("()[]{}"), "=> expected true");
console.log(isValid("{[]}"), "=> expected true");
console.log(isValid("((()))"), "=> expected true");
console.log(isValid("([{}])"), "=> expected true");

// ❌ Invalid cases
console.log(isValid("("), "=> expected false");
console.log(isValid(")"), "=> expected false");
console.log(isValid("(]"), "=> expected false");
console.log(isValid("([)]"), "=> expected false");
console.log(isValid("((())"), "=> expected false");
console.log(isValid("(()))"), "=> expected false");
console.log(isValid("([{}]))"), "=> expected false");
console.log(isValid("{[}"), "=> expected false");