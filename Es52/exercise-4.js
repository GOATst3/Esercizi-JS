const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};

function onlyNum(obj){
  let newObj={};
  for(let key in obj){
    if(typeof obj[key] == "number") newObj[key]=obj[key]
  }
  return newObj
}

const json = JSON.stringify(onlyNum(person));

console.log(json); // Should return: { id: 1, age: 25 }