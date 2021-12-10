const start = Date.now();

function doAction(name,duration){
  setTimeout(()=>{
    console.log("name: ",name);
  },duration);
}


//
// Look
//
doAction("Look",1000);

//
// Get Up
//
doAction("Get Up",3000);

//
// Walk
//
doAction("Walk",5000);


//
// openTheDoor
//
doAction("Open The Door",2000);

//
// walkThroughTheDoor
//
doAction("Walk Through The Door",2000);


console.log("I am done being programmed.");
