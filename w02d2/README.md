# Asynchronous Flow

[] Review of how functions can be defined
[] Functions can be scheduled to be executed later
[] Scheduled executions can only start after the main thread has finished 
   (no matter how long the main thread takes!)
[] Our Robot Control and Reaction System

#
# Review of Function Definition Syntax
#

function iHaveAName(callback){
    // does some stuff
    callback("monkeyfuzz");
    return something;
}

iHaveAName(  (p2)=>{  console.log('p2:',p2);  }  );



# Why do we want to use callbacks?

# Robots

https://www.youtube.com/watch?v=_sBBaNYex3E

# What is asyncronicity?

1) Learn to read "the main thread" and follow where the javascript parser will go.

2) Understand that lots of things can end up on the "event loop" but that none of them will start until the main thread is finished.

3) The event loop calls the functions that were queued up to run at their appropriate times, and so any  return value goes back to the Event Loop itself. i.e. Your code doesn't call the things that happen on the Event Loop. Therefore if you want access to their output, you need to have them call a callback of your making.

