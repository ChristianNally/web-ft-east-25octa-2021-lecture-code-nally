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
const look = () => doAction("Look", 1000, getUp);

//
// Get Up
//
const getUp = () => doAction("Get Up", 3000, walk);

//
// Walk
//
const walk = () => doAction("Walk", 5000, openTheDoor);

//
// openTheDoor
//
const openTheDoor = () => doAction("Open The Door", 2000, walkThroughTheDoor);

//
// walkThroughTheDoor
//
const walkThroughTheDoor = () => doAction("Walk Through The Door", 2000, null);


console.log("I am done being programmed.");
