//es5
function getKeys(obj) {
  let keys=[];
  for (const key in obj){
    keys.push(key);
  }
  return keys;
}

//es6
function getKeys1(obj) {
  let keys=[];
  for (let [key] of Object.entries(obj)) {
    keys.push(key);
  }
  return keys;
}

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 32,
  city: 'Rome',
  job: 'Developer',
};

const keys = getKeys(person);
const keys1 = getKeys1(person);
console.log(keys);
console.log(keys1);

