const start = Date.now();

function doAction(name,duration,next){
  setTimeout(()=>{
    console.log("name: ",name);
    next();
  },duration);
}

//
// Look
//
const Look = () => doAction("Look",1000);

//
// Get Up
//
const Get = () => doAction("Get Up",3000);

//
// Walk
//
const Walk = () => doAction("Walk",5000);


//
// openTheDoor
//
const Open = () => doAction("Open The Door",2000);

//
// walkThroughTheDoor
//
const Walk = () => doAction("Walk Through The Door",2000);


console.log("I am done being programmed.");
