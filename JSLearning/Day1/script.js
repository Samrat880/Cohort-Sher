// DAY 36 

// Recursion in JS



// ATM Simulator - Allow 3 withdrawals start from 1000 balance. Ask withdrawal amount 3 times

// let balance = 1000;
// let flag = false;

// let count = 0;

// while(balance > 0 && count !== 3){
//     let amount = +prompt("Enter withdrawal amount: ");
//     count++;
//     if(amount <= balance){
//         balance -= amount;
//         console.log(`Withdrawal successful. Remaining balance: ${balance}`);
//     }else{
//         flag = true;
//         console.error("Insufficient balance");
//         break;
//     }
// }

// if( flag === true){
//     console.log("Insufficient balance");
// }
// console.log(`Current Balance ${balance}`);


// ASK user 5 numbers. Count how many are positive
// let counter = 0;

// for(let i = 1 ; i <= 5; i++){
//     let num = + prompt("ENter the number: ")
//     if( num > 0) counter++;
// }
// console.log(counter)

// Print only first 3 odd numbers between 1 to 20

// let count = 0;
// let start = +prompt("Enter a number  : ")
// let end = +prompt("Enter a number  : ")


// for(let i = start ; i <= end ; i++){
//     if( i  % 2 !== 0){
//         console.log(i)
//         if( ++count === 3) break;
//     }
// }



//  DAY 34 

// Part 2

// let start = +prompt("Enter starting number: ");
// let end = +prompt("Enter ending number: ");

// if( start > end) console.error("start can not be bigger than end")

//     for(let i = start; i <= end; i++){
//         console.log(i)
//     }


// keep asking number until user enter the even number

// let number = +prompt("Enter a number: ");

// while( number % 2 !== 0){
//     number = +prompt("Enter an even number: ");
// }

// console.log(number)

// print the sum of odd number from 1 to 20

// let sum = 0;

// for(let i = 1; i <= 20; i++){
//     if( i % 2 === 0){
//         sum = sum + i;
//     }
// }
// console.log(sum)

// // print the odd numbers between 1 to 30

// for(let i = 1; i <= 30; i++){
//     if( i % 2 !== 0){
//         // sum = sum + i;
//         console.log(i)
//     }
// }


// Print numbers divisible by 7 from 1 to 50 use modulo % loop.

// for(let i = 0; i <= 50; i++){
//     if( i % 7 === 0){
//         console.log(i)
//     }
// }

// // count total number of "yes" until user enters "stop"

// let word = prompt("Enter a word: ");
// let count = 0;

// while( word !== "stop"){
//     if( word === "yes") count++;
//     word = prompt("Enter a word again: ");
// }
// console.log(`Total number of counti ${count}`)


// Allow only 3 attempts to enter correct password

// let attempt = 0;
// let pass = "Samrat@123"

// let password = prompt("Enter your Password: ")
// attempt++;

// while( attempt < 3 && pass !== password.trim()){
//     password = prompt("Incorrect password. please try again: ")
//     attempt++;
// }

// if( attempt === 3 && pass !== password.trim()){
//     console.log("Account Locked")
// }else{
//     console.log("LoggedIN")
// }



// let attempts = 0;
// let flag = false;
// let pass = "Samrat@123"

// let password = prompt("Enter your password: ");
// attempts++;

// if (password.trim() === pass) {
//     flag = true;
//     console.log("Go Ahead")
// }

// while (password.trim() !== pass) {
//     if( attempts === 3){
//         console.error("Account locqwked")
//         break;
//     }
//   password = prompt("Incorrect password. please try again: ")
//   if(password.trim() === pass) {flag = true;
//   console.log("Go ahead")}
//   attempts++;

// }


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

