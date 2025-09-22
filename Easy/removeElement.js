// https://leetcode.com/problems/remove-element/
// Array
// Two Pointers
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let left = 0;
    for (let i = 1; i < nums.length; i++) {
        
        if(nums[i]!= val && nums[left]== val){
            [nums[left], nums[i]] = [nums[i],nums[left]]
           for (left; left<i; left++) {
            if(nums[left]==val) break
            
           }
        }
        else if(nums[left]!= val) left++;


       
        
    }

    for (let x = nums.length-1; nums[x]==val; x--) {
        nums.pop()
        
    }
	return nums.length
}

var removeElement = function (nums, val) {
    let left = 0;
let total= 0;
    for (let i = 0; i < nums.length; i++) {
        if(nums[i]!=val){
            total++;
        }
        if(nums[i]!= val && nums[left]== val){
            [nums[left], nums[i]] = [nums[i],nums[left]]
           left++;
     
            
           }
           else if(nums[left]!= val) left++;
        }

    return total
    }

    var removeElement = function (nums, val) {
    let left = 0;
let total= 0;
    for (let i = 0; i < nums.length; i++) {
        if(nums[i]!=val){
            total++;
        }
        if(nums[i]!= val && nums[left]== val){
            [nums[left], nums[i]] = [nums[i],nums[left]]
           left++;
     
            
           }
           else if(nums[left]!= val) left++;
        }

    return total
    }

        var removeElement = function (nums, val) {
    let left = 0;
let total= 0;
    for (let i = 0; i < nums.length; i++) {
        if(nums[i]!=val){
            total++;
        }
        if(nums[i]!= val && nums[left]== val){
            [nums[left], nums[i]] = [nums[i],nums[left]]
           left++;
     
            
           }
           else if(nums[left]!= val) left++;
        }

    return total
    }

// To do again



console.log(removeElement([2,2,3],2))
console.log(removeElement([3,3],5))
console.log(removeElement([1],1))
console.log(removeElement([2],3))
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
console.log(removeElement([3, 2, 2, 3], 3));
