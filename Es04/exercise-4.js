// ceo => 2200
// manager => 1800
// cto => 1800
// developer => 1500
// default => 1000
function calculateSalary(role) {
  if (role=="developer") {
    return "€1500 for "+role.valueOf();
  } else if (role=="cto"||role=="manager"){
    return "€1800 for "+role.valueOf();
  }
  else if (role=="ceo"){
    return "€2200 for "+role.valueOf();
  }
  else{
    return "€1000 for "+role.valueOf();
  }
}

const ceoSalary = calculateSalary('ceo');
const managerSalary = calculateSalary('manager');
const ctoSalary = calculateSalary('cto');
const developerSalary = calculateSalary('developer');
const otherSalary = calculateSalary('other');

console.log(ceoSalary);
console.log(managerSalary);
console.log(ctoSalary);
console.log(developerSalary);
console.log(otherSalary);