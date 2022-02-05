// Code your solution here

//function findMatching

// function findMatching(array, string) {
//     let newArray = [...array];
//     let newString = string;
//     let checkArray = newArray.filter((newArray => newArray.toUpperCase() === newString.toUpperCase()));
//         return checkArray
// }

function findMatching(array, string) {
    return array.filter(function (element) {
        return element.toUpperCase() === string.toUpperCase()
    })
}


// function fuzzyMatach

// function fuzzyMatch(array,string) {
//     let newArray = [...array];
//     let newString = string;
//     let checkArray = newArray.filter((newArray => newArray[0] === newString[0]));
//         return checkArray
// }
 
function fuzzyMatch(array,string) {
    return array.filter (function (element) {
        return element[0] === string[0]
    })
}


// function matchName

function matchName (arrayOfObjects, string) {
    return arrayOfObjects.filter(function (element) {
        return element.name === string;
    })
}

// function matchName (arrayOfObjects, string) {
//     let checkArray = arrayOfObjects.filter(function (element) {
//         return element.name === string;
//     })
//     return checkArray
// }
