
function myOutput(ex){
    console.log("here is what I got:",ex);
}

const doLater = function(){
    let x = 5;
    x = x * x;
//    return x; this will not work
    myOutput(x);
}

setTimeout(doLater,1000);



// const fs = require('fs');

// fs.readFile('filename.txt', 'utf8', (data)=>{
//   console.log(data);
// });


