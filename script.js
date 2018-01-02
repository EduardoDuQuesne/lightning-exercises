/* Lightning Exercises 1 */

// let jobs = [
//     {name: "Bob", department: "sales", title: "sales manager"},
//     {name: "Tina", department: "finance", title: "director of finance"},
//     {name: "Randy", department: "IT", title: "hardware guy"},
//     {name: "Glenda", department: "C-suite", title: "CEO"}
// ];

// for (let i = 0; i < jobs.length; i++) {
//     console.log(`${jobs[i].name} is the ${jobs[i].title} in the ${jobs[i].department} department.`);
//     let newDiv = document.createElement("div");
//     newDiv.setAttribute("class", "job-position");
//     let newContent = document.createTextNode(`${jobs[i].name} is the ${jobs[i].title} in the ${jobs[i].department} department.`)
//     newDiv.appendChild(newContent);
//     document.getElementById("body").appendChild(newDiv);
// }

// Lightning exercise for Tues, 12/5:
// Make an object with at least three properties. One property should be a method
// Create a new object that links to the first object.
// Give the new object two properties of its own
// In the console, call .hasOwnProperty() on the new object, passing in an inherited property as an argument. Does it return true or false?
// Do it again, but this time pass in one of the properties you added to the new object. True or false?

// let pizza = {
//     size: large,
//     toppings: "pepperoni",
//     function: addTopping(name) {
//         pizza.toppings.concat(name);
//     }
// }

//Lightning Exercise - 12/6/17
// Loop over every item in this array [45, “I”, true, null, “am”, 3.56, “a”
//, undefined, { catchphrase: “Oh hai, Mark”}, “JS”, “rockstar”]  and 
//return a new array that contains only strings. and log out the result.

// let randomArray = [45, "I", true, null, "am", 3.56, "a", undefined, { catchphrase: "Oh hai, Mark"}, "JS", "rockstar"]
// let newArray = [];
// randomArray.forEach(function (obj) {
//     console.log(typeof(obj));
//     newArray.push(String(obj));
// })
// console.log(newArray);

// let randomArray = [45, "I", true, null, "am", 3.56, "a", undefined, { catchphrase: "Oh hai, Mark"}, "JS", "rockstar"]
// let newArray = randomArray.filter(function(item) {
//     return typeof(item) === "string";
// })
// console.log(newArray);



//////////////////// 01 / 02 / 18 Lightning Exercises ///////////////

// Loop-a-palooza 
// Make a loop .forEach and .filter on this array to get the same result
// Make an array calle fave_demo that contains only ages from 18-49

let ages = [12, 23, 89, 16, 34, 19, 2, 7, 45, 50, 26, 102]

let fave_demo = [];

// First Exercise 

// 1

// for (let i = 0; i < ages.length; i++) {
//     if (ages[i] <= 49 && ages[i] >= 18) {
//         fave_demo.push(ages[i]);
//     }      
// };
// console.log(fave_demo);

// 2

// ages.forEach((age)=>{
//     if (age <= 49 && age >= 18) {
//         console.log(age);
//         fave_demo.push(age);
//     }      
// });
// console.log(fave_demo);

// 3 

// fave_demo = ages.filter((age)=>{
//     return
//  age >= 18 && age <= 49;
// });
// console.log(fave_demo);

// Second Exercise

// Use Dot Notation to access value of the meaning of life

// let hitchhikers_guide = {
//     characters: ["Zaphod", "Arthur", "Ford", "Trillian"],
//     catchphrase: "Don't Panic",
//     random_facts: {
//       copies_sold: 14000000,
//       formats: ["radio", "TV", "film", "graphic novel"],
//       ultimate_answer: {
//         meaning_of_life: 42
//       }
//     }
//   };

// console.log(
//     hitchhikers_guide.random_facts.ultimate_answer.meaning_of_life
// );

// Third Exercise //

let yoda_quote = ["the", "greatest", "teacher", "failure", "is"];

// Capitalize 'the' insert a comma after treacher and output "Yoda says, "The greatest teacher, failuer is"

let yoda_output = "Yoda says, ";
yoda_output += `'${yoda_quote[0].toUpperCase().slice(0, 1) + yoda_quote[0].slice(1)} ${yoda_quote[1]} ${yoda_quote[2]}, ${yoda_quote[3]} ${yoda_quote[4]}"`;
console.log(yoda_output);
