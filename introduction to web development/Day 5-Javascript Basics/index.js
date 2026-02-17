// JavaScript Variables

var fullName = "Shreejal Maharjan";
let address = "Kathmandu, Nepal";
const bloodGroup = "AB+";

console.log("Full Name:", fullName);
console.log("Address", address);
console.log("Blood Group:", bloodGroup);

//Data types

let name = "Shreejal"; //string

let age = 21; //Number

let isStudent = false; //Boolean

let hobbies = ["Coding", "Travelling", "Cooking"]; //Array
console.log(hobbies[0]);

let user = {
  name: "Shreejal",
  age: 21,
  isStudent: false,
  hobbies: ["Coding", "Travelling", "Cooking"],
}; //object

console.log(user["name"]);
console.log(user.age);

//Functions
function greet(name) {
  console.log("welcome", name);
}
greet("Shreejal");

//dom manipulation

const headingElementByID = document.getElementById("heading-2");
console.log("heading element by id", headingElementByID);

// document.querySelector
const headingElementByQuery = document.querySelector("#heading-2");
console.log("heading element by Query selector", headingElementByQuery);

headingElementByQuery.textContent = "Get element by query selector";
headingElementByQuery.style.color = "blue";

const buttonElement = document.querySelector(".btn");
buttonElement.addEventListener("click", function () {
  alert("Button Clicked!");
  console.log("Button clicked");
});
