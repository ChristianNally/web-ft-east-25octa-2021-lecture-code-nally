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

setTimeout(c2,1500);

console.log('AFTER setTimeout', x);



//

