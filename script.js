// Challenge 1

const isNumberPositive = (number) => {
    return number >= 0;
}

console.log(isNumberPositive(-1));

//Challenge 2

const convertDaysToAge = (days) => {
    let ageInYears = days / 365;
    return `${Math.round(ageInYears)} years old`
}

console.log(convertDaysToAge(4657));

//Challenge 3

const getLargestNumber = (numberOne, numberTwo, numberThree) => {
    if(numberOne > numberTwo && numberOne > numberThree) {
        return numberOne;
    } else if(numberTwo >= numberOne && numberTwo > numberThree) {
        return numberTwo;
    } else {
        return numberThree;
    }
}

console.log(getLargestNumber(8, 8, 3));

//Challenge 4

const getLastName = (array) => {
    return array[array.length-1];
}

console.log(getLastName(["Charlie", "Rob", "Andy"]));

//Challenge 5

const allNumbersPositive = (array) => {
    let filteredArray = array.filter(item => item >= 0);
    return filteredArray.length === array.length;
}

console.log(allNumbersPositive([1, 2, 3, -1]));