function fixDeath(people) {
    return people.map(e=>{
        if(!Object.hasOwn(e, 'yearOfDeath')){
            let curYear = new Date();
            curYear = curYear.getFullYear();
            e.yearOfDeath = curYear;
            return e;
        }
        return e;
    })    
}

const findTheOldest = function(people) {
    if(people.length == 0) return 'error';

    people = fixDeath(people);

    return people.reduce((finalPerson, curPerson) => {
        let finalPersonAge = finalPerson.yearOfDeath - finalPerson.yearOfBirth;
        let curPersonAge = curPerson.yearOfDeath - curPerson.yearOfBirth;
        if(isNaN(finalPersonAge)){
            return curPerson;
        }
        if(isNaN(curPersonAge)){
            return finalPerson;
        }
        return finalPersonAge > curPersonAge ? finalPerson : curPerson;
    })
};

const people = [
    {
        name: "Carly",
        yearOfBirth: 1066,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
]

console.log(fixDeath(people));
// findTheOldest(people);

// Do not edit below this line
module.exports = findTheOldest;
