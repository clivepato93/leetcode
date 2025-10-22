

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(n) {
    let reset = n;
    return {increment:function(){
        reset++
        return reset;
    },decrement:function(){
     reset--
        return reset;
    },reset:function(){

        reset=n
        return reset;
    }}
};


  const counter = createCounter(5)
  counter.increment(); // 6
  counter.reset(); // 5
  counter.decrement(); // 4