

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {

const obj = {}
    for(let i =0;i<nums.length;i++){
        if(obj[nums[i]]==undefined){
            obj[nums[i]] = i;
        }
        
        else if(obj[nums[i]]>=0 && (i-(obj[nums[i]]))<=k){
            return true 
        }
        else{
            obj[nums[i]] = i;
        }
    }
    return false
};

console.log(containsNearbyDuplicate([1,2,3,1,2,3],2),false)
// console.log(containsNearbyDuplicate([1,2,3,1],3),true)