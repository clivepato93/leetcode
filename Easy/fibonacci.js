
// Math 
// Dynamic Programming 
// Recursion 
// Memoization

var isSubsequence = function(s, t) {
    let pointer = 0;
    for (let i = 0; i < t.length; i++) {
        if(pointer == s.length) return true
        if(s[pointer]== t[i]){
            pointer++;
        }
        
    }
    return pointer == s.length
};