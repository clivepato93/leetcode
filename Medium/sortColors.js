// https://leetcode.com/problems/sort-colors/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    const numsMap ={0:[],1:[],2:[]}
    for(let i =0;i<nums.length;i++){
     numsMap[nums[i]].push(nums[i])   
    }
    let pos = 0
    for(let i =0;i<nums.length;i++){
        while(!(numsMap[pos].length)) {

           pos++
        }
        if(numsMap[pos].length){
            nums[i] = numsMap[pos].pop();
           
        }
    }
};

console.log(sortColors([2,0,2,1,1,0]))