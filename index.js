// Code your solution here
function findMatching(array, string) {
    let newArray = [...array];
    let newString = string;
    let checkArray = newArray.filter((newArray => newArray.toUpperCase() === newString.toUpperCase()));
        return checkArray
}

// function findMatching(array,string) {

function fuzzyMatch(array,string) {
    let newArray = [...array];
    let newString = string;
    let checkArray = newArray.filter((newArray => newArray[0] === newString[0]));
        return checkArray
}
 
// function matchName(array,string) {
//     let newArray = [...array];
//     let newString = string;
//     let checkArray = newArray.filter((newArray => newArray === newString))
//         return checkArray
// }

function matchName (arrayOfObjects, string) {
    return arrayOfObjects.filter(function(element) {
        return element.name === string
    })
}
