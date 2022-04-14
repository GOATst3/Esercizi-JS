class Person {
  #firstName;
  #lastName;
  #age;

  constructor(firstName,lastName,age){
    this.#firstName=firstName;
    this.#lastName=lastName;
    this.#age=age;
  }

  get firstName(){
    return this.#firstName;
  }
  get lastName(){
    return this.#lastName;
  }
  get age(){
    return this.#age;
  }

  set firstName(firstName){
    this.#firstName=firstName;
  }
  set lastName(lastName){
    this.#lastName=lastName;
  }
  set age(age){
    this.#age=age;
  }

  get fullName(){
    return `${this.#firstName} ${this.#lastName}`
  }
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);