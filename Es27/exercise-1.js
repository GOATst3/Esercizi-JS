const person = {
  firstName: 'John',
  lastName: 'Doe'
};

person.address ? console.log(person.address.city) : console.log("Argh! Cannot read property 'city' of undefined")
person.fullName ? console.log(person.fullName()) : console.log("Argh! Cannot read property 'fullName()' of undefined") 