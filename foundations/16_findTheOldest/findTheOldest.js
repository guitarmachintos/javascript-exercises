const findTheOldest = function(arrPeople) {
    return arrPeople.reduce((prevPeople, curPeople) => {
        let curYear = new Date().getFullYear();
        let age1 = (prevPeople.yearOfDeath ?? curYear) - prevPeople.yearOfBirth;
        let age2 = (curPeople.yearOfDeath ?? curYear) - curPeople.yearOfBirth;
        return age1 > age2 ? prevPeople : curPeople;
    })
};

// Do not edit below this line
module.exports = findTheOldest;
