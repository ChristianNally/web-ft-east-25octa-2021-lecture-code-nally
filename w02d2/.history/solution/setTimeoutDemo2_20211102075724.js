let x = 1;
console.log('BEFORE setTimeout: ', x);

setTimeout(   () => { x = 2; console.log('INSIDE setTimeout: ', x);}
,1000);

console.log('AFTER setTimeout', x);
