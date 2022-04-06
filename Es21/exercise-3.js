const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  address: {
    state: 'Italy',
    region: 'Lazio',
    city: 'Rome'
  }
};

const person2 = JSON.parse(JSON.stringify(person1));
/*
Oppure si può assegnare normalmente person1 a person2 e utilizzare il metodo sopra solo sull'oggetto address
------------------------------------------------------------------------
const person2 = Object.assign({},person1);
person2.address = JSON.parse(JSON.stringify(person1.address));
------------------------------------------------------------------------
In questo modo però, se ci fossero altre istruzioni prima della seconda, l'oggetto address verrebbe modificato in entrambi gli oggetti padre
*/
person2.address.region = 'Lombardia';
person2.address.city = 'Milan';

console.log(person1);
console.log(person2);