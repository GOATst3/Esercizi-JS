function sumUntil(maxValue) {
  let output="",sum=0;
  for (let i = 1; i <=maxValue; i++) {
    sum+=i;
    if (i<maxValue)output+=i+"+";
    else if(i==5) output+=i+"=";
    
  }
  output+=sum.toString();
  return output
}

console.log(sumUntil(5));