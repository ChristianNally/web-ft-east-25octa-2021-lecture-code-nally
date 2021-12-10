let x = 1;

console.log('BEFORE setTimeout: ', x);

const c1 = () => {
  x = 1;
  console.log('INSIDE setTimeout: ', x);
};

const c2 = () => {
  x = 2;
  console.log('INSIDE setTimeout: ', x);
};

setTimeout(c1,3000);

console.log('AFTER setTimeout', x);

// // EVENT LOOP

// while (NextMessageExists()) {
//   processNextMessage();
// }

// // 1500  -> c2()
// // 3000  -> c1()