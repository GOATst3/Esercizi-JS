const person = {

  set setFirstName (firstName) {
    this.firstName=firstName;
  },

  get getFirstName(){
    return this.firstName;
  },

  set setLastName(lastName) {
    this.lastName=lastName;
  },

  get getLastName(){
    return this.lastName;
  },
  fullName(){
    return `${this.getFirstName} ${this.getLastName}`
  }
}

let john = Object.create(person);
john.setFirstName="John";
john.setLastName="Doe";

let simon = Object.create(person);
simon.setFirstName="Simon";
simon.setLastName="Collins";

console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins