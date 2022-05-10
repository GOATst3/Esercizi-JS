const persons = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35
  }
];

const jobs = [
  {
    id: 1,
    jobTitle: 'CEO'
  },
  {
    id: 2,
    jobTitle: 'Project Manager'
  },
  {
    id: 3,
    jobTitle: 'Developer'
  }
];

function fetchPersonById(id){
  return new Promise(
    (resolve,reject)=> setTimeout(
      ()=>persons.find(person=>person.id==id)? resolve(persons.find(person=>person.id==id)) : reject(new Error('The id inserted is not present in persons')),1000
    )
  )
}
function fetchJobById(id){
  return new Promise(
    (resolve,reject)=> setTimeout(
      ()=>jobs.find(job=>job.id==id)?resolve(jobs.find(job=>job.id==id)):reject(new Error('The id inserted is not present in jobs')),1000
    )
  )
}

//consume promise
Promise.all([fetchPersonById(2),fetchJobById(2)])
.then(console.log)
.catch(console.error)