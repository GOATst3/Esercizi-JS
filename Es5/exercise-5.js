// ceo => 2200
// manager => 1800
// cto => 1800
// developer => 1500
// default => 1000
function calculateSalary(role) {
  switch(role){
    default:
      return "€1000 for "+role.valueOf();
    case 'developer':
      return "€1500 for "+role.valueOf();
    case 'cto': case 'manager':
      return "€1500 for "+role.valueOf();
    case 'ceo':
      return "€2200 for "+role.valueOf();

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