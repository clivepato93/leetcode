// https://leetcode.com/problems/permutation-in-string/

// Topics 
// Hash Table
// Two Pointers 
// String 
// Sliding Window 
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
	let check = true;
	const letters = {};
	const compare = {};

	for (let i = 0; i < s1.length; i++) {
		if (letters[s1[i]]) {
			letters[s1[i]]++;
		}
		if (compare[s2[i]]) {
			compare[s2[i]]++;
		} 
    if(!compare[s2[i]]) {
			compare[s2[i]] = 1;
			
		}
     if(!letters[s1[i]]) {
			letters[s1[i]] = 1;
		}
	}

	for (const key in letters) {
		if (compare[key] && compare[key] == letters[key]) {
			continue;
		} else {
			check = false;
			break;
		}
	}
	if (check) return true;

	for (let i = 1; i <= s2.length - s1.length; i++) {
		compare[s2[i - 1]]--;
		if (compare[s2[i - 1]] == 0) {
			delete compare[s2[i - 1]];
		}
		if (!compare[s2[i + (s1.length - 1)]]) {
			compare[s2[i + (s1.length - 1)]] = 1;
		} else {
			compare[s2[i + (s1.length - 1)]]++;
		}
		let secondCheck = true;
		for (const key in letters) {
			if (compare[key] && compare[key] == letters[key]) {
				continue;
			} else {
				secondCheck = !secondCheck;
				break;
			}
		}

		if (secondCheck) return true;
	}
	return false;
};
console.log(checkInclusion("hello", "ooolleoooleh"), false);
// console.log(checkInclusion('ab','ab'),true)
// console.log(checkInclusion('adc',"dcda"

// ),true)
// console.log(checkInclusion('ab',"eidboaoo"),false)
// console.log(checkInclusion('a','ab'),true)
// console.log(checkInclusion("ab", "eidbaooo"), true);
