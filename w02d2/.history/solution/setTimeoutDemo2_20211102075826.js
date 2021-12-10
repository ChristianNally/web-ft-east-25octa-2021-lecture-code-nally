let x = 1;
console.log('BEFORE setTimeout: ', x);

setTimeout(() => {
  console.log('INSIDE setTimeout: ', x);
},3000);

console.log('AFTER setTimeout', x);
