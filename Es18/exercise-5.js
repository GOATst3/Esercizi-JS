function memoize(fn) {
  let cache = {};
  return function(x){
    if (x in cache) return `fetching result from cache for ${x}! : ${cache[x]}`;
    cache[x]=fn(x);
    return `calculating result for ${x}! : ${fn(x)}`;
  }
}

function fact(x) {
  if (x === 0) return 1;
  return x * fact(x - 1);
}

factorial = memoize(fact);
// cache empty
console.log(factorial(10));
console.log(factorial(6));
console.log(factorial(5));
// cache with result of 10, 6, 5
console.log(factorial(10));
console.log(factorial(6));
console.log(factorial(5));