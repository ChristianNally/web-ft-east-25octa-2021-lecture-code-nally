

/**
                             Named             Anonymous

With Function Keyword   function sum(a,b){     function(a,b){
                          return a+b;            return a+b;
                        }                      }


No Function Keyword                            (a,b) => {
(arrow function)                                 return a+b;
                                               }


%%% any anonymous function can be given a name by assigning it
%%% as a value to a variable (e.g. as a parameter to a function
%%% or a convenience variable.)

*/

function thisIsAFunction(output){
  console.log("Hello " + output);
}

thisIsAFunction("a thing");

//
//  
//

const anotherFunction = (callback) => {
  console.log(`what is this dagger before me?!`);
  callback('skull');
};

anotherFunction((myParam)=>{
  console.log('Here is what anotherFunction decided to send me:'+myParam);
});

