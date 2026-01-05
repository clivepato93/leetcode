// https://leetcode.com/problems/lemonade-change/

/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
   let fiveChange = 0;
   let tenChange = 0;
   let fiveOwed= 0;
   let fiftheenOwed =0;
   for(let i = 0;i<bills.length;i++){
    if(bills[i]==5){
        fiveChange++;
    }
    else if(bills[i]==10 && fiveChange){
      fiveChange--;
      tenChange++;
    }
     else if(bills[i]==10 && fiveChange==0){
      fiveOwed--;
      tenChange++;
    }
    else if(bills[i]==20 && fiveChange>=1 && tenChange>=1){
        fiveChange--;
        tenChange--;
    }
    else if(bills[i]==20 && fiveChange>=3){
        fiveChange-=3;
    
    }
     else {
        fiftheenOwed++;
    
    }

   } 
   return fiftheenOwed==0 && fiveOwed ==0
}

console.log(lemonadeChange([5,5,5,10,5,5,10,20,20,20]),false)
// console.log(lemonadeChange([20]),false)
// console.log(lemonadeChange([5,5,10,10,20]),false)
// console.log(lemonadeChange([5,5,5,10,20]),true)