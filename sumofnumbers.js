const mylist = [1, 2, 3, 4, 5, 4, 3, 2, 1]

function sumFor(list) {
  let sum = 0;
  for(let i = 0; i < list.length; ++i) {
    sum += list[i];
  }
  return sum;
}

function sumWhile(list) {
  let sum = 0;
  let i = 0;
  while(i < list.length) {
    sum += list[i++];
  }
  return sum;
}

function sumRecursion(list) {
  return recursionHelper(list.slice());
}
function recursionHelper(list) {
  if(list.length < 1) {
    return 0;
  }
  else {
    return list.shift() + sumRecursion(list);
  }
}

function sumTheSimpleWay(list) {
  return _.reduce(list, (memo, num) => memo + num);
}

console.log(sumFor(mylist));
console.log(sumWhile(mylist));
console.log(sumRecursion(mylist));
console.log(sumTheSimpleWay(mylist));
