// https://leetcode.com/problems/find-closest-person/submissions/1774232663/?envType=daily-question&envId=2025-09-04
// Math

var findClosest = function(x, y, z) {
    const firstRes= Math.abs(x-z)
    const secondRes= Math.abs(y-z)
        if(firstRes == secondRes) return 0
    return firstRes<secondRes ? 1:2
};