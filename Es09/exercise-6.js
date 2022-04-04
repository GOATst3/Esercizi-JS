//es5
function getKeys(obj) {
  let key=[];
  for (const property in obj){
    key.push(property+": "+obj[property]);
  }
  return key;
}

//es6
function getKeys1(obj) {
  let key1=[];
  for (let [key, value] of Object.entries(obj)) {
    key1.push(key+": "+ value);
  }
  return key1
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
