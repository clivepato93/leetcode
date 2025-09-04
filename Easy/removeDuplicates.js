// https://leetcode.com/problems/remove-duplicates-from-sorted-array/
// Topics 
// Array 
// Two Pointers

// var removeDuplicates = function(nums) {
//     const obj = {}
//     const arr =[]
//     for(let i =0;i<nums.length;i++){
//         if(!(nums[i] in obj)){
//             arr.push(nums[i])
//         }


//         obj[nums[i]] = true
//     }
//     return arr
// };


var removeDuplicates = function(nums) {
    let j = 0
    for(let i =1;i<nums.length;i++){
        if(nums[i]!=nums[j]){
            j++
            nums[j]=nums[i]
        }
        }
        // obj[nums[i]] = true
        return j+1
    }

console.log(removeDuplicates([1,1,2]),[1,2])
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))