// https://leetcode.com/problems/remove-element/
// Topics 
// Array 
// Two Pointers

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let j = 0
    let swapPosition = nums.length;
    for (let i = 0; i < swapPosition; i++) {
        if(nums[i]!=val){
            j++;
        }
        
            if(nums[i]== val){
                if(nums[swapPosition-1]!=val) [nums[i],nums[swapPosition-1]] =[nums[swapPosition-1],nums[i]]
                else{
                    for (swapPosition; swapPosition>i; swapPosition--) {
                        
                                        if(nums[swapPosition-1]!=val){

                                            [nums[i],nums[swapPosition-1]] =[nums[swapPosition-1],nums[i]]
                                            break
                                        } 
                                        
                                    }
                                } 
                                i--;
            }
        
    }
    return j
};

var removeElement = function(nums, val) {
    let j = 0
    for (let i = 0; i < nums.length; i++) {
      
        if(nums[i]!=val){
             [nums[i],nums[j] ]=[nums[j],nums[i]]
             j++
        }
        
           
    }
    return j
};

var removeElement = function(nums, val) {
    let j = 0
    for (let i = 0; i < nums.length; i++) {
      
        if(nums[i]!=val){
             nums[j]=nums[i]
             j++
        }
        
           
    }
    return j
};

console.log(removeElement([3,2,2,3],3),2)
console.log(removeElement([0,1,2,2,3,0,4,2],2),5)
console.log(removeElement([4,5],4),1)