//  DAY 34 

// Part 2
let attempts = 0;
let flag = false;
let pass = "Samrat@123"

let password = prompt("Enter your password: ");
attempts++;

if (password.trim() === pass) {
    flag = true;
    console.log("Go Ahead")
}

while (password.trim() !== pass) {
    if( attempts === 3){
        console.error("Account locqwked")
        break;
    }
  password = prompt("Incorrect password. please try again: ")
  if(password.trim() === pass) {flag = true;
  console.log("Go ahead")}
  attempts++;

}


// // Ask your user fro password and print acces status

// let password = "Samrat@123"

// let pass = prompt("Enter your password: ")

// if( pass === null){
//     console.error("you cancelledhello it")
// }else{
//     if( pass.trim() === password){
//         console.log("matched")
//     }else{
//         console.error("Not matched")
//     }
// }


// // count how many numbers between 1 to 15 are greater than 8
// let count = 0;

// for ( let i = 1; i <= 16; i++){
//     if( i > 9) count++; 
//     console.log(i)
// }
// console.log(` total count is ${count}`)

// // Print multiplication of 5

// for( let i = 1; i <= 10; i++ ) {
//     console.log(`5 x ${i} = ${5 * i}`);
// }

// // Aks user's age and check if eligible for voting

// let age = prompt("Enter your age: ")

// if ( age === null) {
//     console.error("You cancelled it.")
// }else {
//     if (age.trim() === "") {
//         console.error("please write something...")
//     }else{
//         age = Number(age)
//         if(isNaN(age)){
//             console.error("Please enter a valid number")
//         }else{
//             if (age < 0){
//                 console.error("Age cannot be negative")
//             } else if (age < 18){
//                 console.log("You are a minor")
//             } else if (age >= 18 && age < 65){
//                 console.log("You are an adult")
//             } else {
//                 console.log("You are a senior citizen")
//             }
//             console.log(`your age is ${age}`)
//         }
//     } 
// }



// DAY33 

//  when every we use prompt the input is always string to convert it to number we use + before prompt
// or use parseInt() or parseFloat()

// let num = prompt("Enter a number");

// if( num === 12){
//     console.log("it is 12")
// }else console.log('it is not 12')

// truthy nad falsy values in JS

// test()

// function test() {
//     console.log("SAMMY BHAI")
// }


// let count = 5;
// console.log(count);
// count++;
// console.log(count);



// let msg = " Sammay boi wassup";
// console.log(msg.slice(0,7));



// let username = prompt("Samrat"); // add + to convert to number
// console.log(typeof username)


// let name = prompt("wassup buddy");
// alert(`Hello ${name}, welcome to JS world!`);


// console.log("Samrat");
// console.info("Samrat");
// console.warn("Samrat");
// console.error("Samrat");



// var a = "Samrat";
// let b  = "King ";
// const c = "Cohort 10";

// a = "update Samrat";
// b = "update King ";
// c = "update Cohort 10"; // error


// float = 32.2;

// number = 42;

// string = " Wassup dude ";


// boolean = true; // false


// null = jiske pass koi value nahi hoti 

