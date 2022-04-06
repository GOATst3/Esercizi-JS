function calculate() {
  let temp={
    value:0,
    add(a){
      this.value+=a;
      return this;
  },
    sub(a){
      this.value-=a;
      return this;
    },
    multiply(a){
       this.value*=a
       return this;
      },
    divide(a){
      this.value/=a
      return this;
    },
    printResult(){console.log(this.value)}
  }
  return temp;
}

const calculator = calculate();
calculator.add(2).add(4).multiply(3).sub(1).sub(3).divide(2).printResult(); // Il risultato sarà: 7