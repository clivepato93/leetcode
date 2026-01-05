// https://leetcode.com/problems/smallest-missing-integer-greater-than-sequential-prefix-sum/

// Array
// Hash Table
// Sorting

/**
 * @param {number[]} nums
 * @return {number}
 */
// var missingInteger = function (nums) {

// 	let prefixSum = nums[0];
// 	const s = new Set();
//     s.add(nums[0])
//     let add = true;
// 	for (let i = 1;i<nums.length; i++) {
//         if( (nums[i - 1] == nums[i] - 1)==false){
//             add = false;
//         }

//         if(add){
//             prefixSum+=nums[i];
//         }
       
//             s.add(nums[i])
// 	}
	
// 	while (s.has(prefixSum)) {
// 		prefixSum++;
// 	}

// 	return prefixSum;
// };

var missingInteger = function (nums) {

	let prefixSum = nums[0];
	const s = new Set(nums);

    let i =1;
    while(i<nums.length &&nums[i]-nums[i-1]==1){
        prefixSum+=nums[i]
        i++;
    }
	
	while (s.has(prefixSum)) {
		prefixSum++;
	}

	return prefixSum;
};

console.log(missingInteger([4, 5, 6, 7, 8, 8, 9, 4, 3, 2, 7]), 30);
console.log(missingInteger([3, 4, 5, 1, 12, 14, 13]), 15);
