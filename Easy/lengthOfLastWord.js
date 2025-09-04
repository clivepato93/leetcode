// https://leetcode.com/problems/length-of-last-word/description/
// Topics 
// String

var lengthOfLastWord = function(s) {
    let wordLength =0;
    let position = s.length-1;
    while(position>=0){
        
         if(s[position]!=' '){
            wordLength++;
        }
         if(wordLength&&s[position]==' '){
            position =-1
        }
        position--;
    }
    return wordLength
};

// console.log(lengthOfLastWord("   fly me   to   the moon  "),4)

// console.log(lengthOfLastWord("luffy is still joyboy"),6)

console.log(lengthOfLastWord("Hello World"),5)

