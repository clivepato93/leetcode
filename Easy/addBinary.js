// https://leetcode.com/problems/add-binary/
// Topics 
// Math
// String 
// Bit Manipulation 
// Simulation

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
// var addBinary = function(a, b) {
//     let num = ''
//     let loop = true;
//     let aIndex = a.length-1

//     let bIndex = b.length-1
//     let carry = null
//     while(loop){
//         let res = null;
//         if(!(a[aIndex]) && !(b[bIndex])){
//             res = '1'
//             loop = !loop
//         }
//         else if(!(a[aIndex]) && carry && Number(b[bIndex])){
//                              res = '0'

//             carry = 1
//         }
//         else if(!(b[bIndex]) && carry && Number(a[aIndex])){
//                              res = '0'

//             carry = 1
//         }
//         else if(Number(a[aIndex]) && Number(b[bIndex])){
//                          res = '0'

//             carry = 1
//         }
//         else if((Number(a[aIndex])||Number(carry)) || (Number(b[bIndex])||carry)){
//              res = '1'
//             carry = 0
//         }
//         else{
//             res='0'
//             carry = 0
//         }
//         num= res + num
//         aIndex--;
//         bIndex--;
//     }
//     return num
// };

var addBinary = function(a, b) {
    let num = []
    let aIndex = a.length-1

    let bIndex = b.length-1
    let carry = 0
    while(a[aIndex]||b[bIndex]||carry){
        const num1 = +(a[aIndex])||0
        const num2 = +(b[bIndex])||0
        const sum =num1+num2+carry
        res= (sum)%2
        carry = Math.floor(sum/2)
       
        num.push(res)
        aIndex--;
        bIndex--;
    }
    return num.reverse().join()
};

var addBinary = function(a, b) {
    let num = ''
    let aIndex = a.length-1

    let bIndex = b.length-1
    let carry = 0
    let res = null;
    while(a[aIndex]||b[bIndex]||carry){
    
        const num1 = (a[aIndex])?.charCodeAt(0) - 48||0
        const num2 = (b[bIndex])?.charCodeAt(0)- 48||0
        num= ((num1+num2+carry)%2) + num
        carry = Math.floor((num1+num2+carry)/2)
       
        aIndex--;
        bIndex--;
    }
    return num
};


// console.log(addBinary('0','0'),'0')
console.log(addBinary("1010",'1011'),'10101')
// console.log(addBinary('11','1'),'100')