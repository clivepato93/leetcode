// https://leetcode.com/problems/sort-the-people/

/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {

    let count = names.length-1;
    let l = 0
    let r = 1
    while(count>0 || r!=names.length){
        if(r==names.length && count){
            l =0;
            r= 1;
            count = names.length-1
        }
        if(heights[l]<heights[r]){
            [heights[l],heights[r]] =[heights[r],heights[l]];
            [names[l],names[r]] =[names[r],names[l]];
            
        }
        else{
            count--;
        }
        l++;
        r++;
    }
  return names
   
};

// to Complete

var sortPeople = function(names, heights) {

    let count = names.length-1;
    let l = 0
    let r = 1
    while(count>0 || r!=names.length){
        if(r==names.length && count){
            l =0;
            r= 1;
            count = names.length-1
        }
        if(heights[l]<heights[r]){
            [heights[l],heights[r]] =[heights[r],heights[l]];
            [names[l],names[r]] =[names[r],names[l]];
            
        }
        else{
            count--;
        }
        l++;
        r++;
    }
  return names
   
};

var sortPeople = function(names, heights) {

    const h ={}

    for (let i = 0; i < heights.length; i++) {
        h[heights[i]] = names[i]


        
    }
  for (let i = 0; i < heights.length-1; i++) {
    if(heights[i]<heights[i+1]){
        [names[i],names[i+1]]= [names[i+1],names[i]];
        [heights[i],heights[i+1]]= [heights[i+1],heights[i]]
    }
    
  }
   return names
};

console.log(sortPeople(["Alice","Bob","Bob"],[155,185,150]

))
// console.log(sortPeople(["Mary","John","Emma"],[180,165,170]))