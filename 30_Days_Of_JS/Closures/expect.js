// https://leetcode.com/problems/to-be-or-not-to-be/?envType=study-plan-v2&envId=30-days-of-javascript

/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {toBe:function(val2){
        if(val===val2) return true
        throw Error("Not Equal");
    },notToBe:function(val2){
        if(val!==val2) return true
         throw Error("Equal");
    }}
};
