const start = Date.now();

function doAction(name,duration){
  console.log(name);
}

function sleepFor(sleepDuration) {
  const nowObject = new Date();
  console.log("nowObject:",JSON.stringify(nowObject));
  const now = nowObject.getTime();
  while (new Date().getTime() < now + sleepDuration) {
    /* do nothing */
  }
}

//
// Look
//
doAction("Look");
sleepFor(1000);

//
// Get Up
//
doAction("Get Up");
sleepFor(3000);

//
// Walk
//
doAction("Walk");
sleepFor(5000);


//
// openTheDoor
//
doAction("Open The Door");
sleepFor(2000);

//
// walkThroughTheDoor
//
doAction("Walk Through The Door");
sleepFor(2000);


console.log("I am done being programmed.");
