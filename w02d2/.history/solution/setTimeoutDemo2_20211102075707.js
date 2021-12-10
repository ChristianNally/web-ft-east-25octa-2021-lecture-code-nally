let x = 1;
console.log('BEFORE setTimeout: ', x);

setTimeout(   () => { x = 2; console.log('INSIDE setTimeout: ', x);}
,1000);

soakUpALotOfTime(55000);

console.log('AFTER setTimeout', x);
