const a = 9 ;
const b = 90 ;

function multiply(){
    console.log(a*b)
}

multiply();


let firstName= "Venecia";
let lastName="Kakusha";
let stuternTrack="Backend Development Program";
let skills= "Software Development Skills";
let favouriteColour="Green";
let yearOfIndependence=1963;


let sentence = "My Name is " + firstName + " " + lastName + ". I am currently at Stutern doing the "+ stuternTrack + ". I have a range of " + skills + ". My favourite colour is " + favouriteColour + ". We got out independence in Kenya in " + yearOfIndependence + "."

console.log(sentence)

// another way 

let fName = "Venecia";
let lName = "Kakusha";
let sTrack = "Backend Development";
let skill = "Software Development";
let favouriteColor = "Green";
let yearIndependence = 1963;


let sentence2 = `Trial two: My name is ${fName} ${lName}. I am currently enrolled in the ${sTrack} program at Stutern and have skills in ${skill}. My favourite color is ${favouriteColor} and my country gained independence in ${yearIndependence}.`;
function createSentence (){
  console.log(sentence2)
};

 createSentence();


function generateSentence(){
    return `Now, My name is ${fName} ${lName}. I am currently enrolled in the ${sTrack} program at Stutern and have skills in ${skill}. My favourite color is ${favouriteColor} and my country gained independence in ${yearIndependence}.`;
};

let sentence3 = generateSentence();
console.log(sentence3)
