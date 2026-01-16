
// let animal = class{
//     constructor(){
//         this.name = "Doggy";
//         this.age = 5;
//     }
//     eat() {}
//     breath() {}
// }

// class Kekda extends animal{
//     constructor(){
//         super();
//         this.legs = 8;
//         this.hands = 0;
//     }
//     susu(){
//         console.log("Kekda is susuing");
//     }
// }

// let k1 = new Kekda();


// class Animal {
//     constructor(){
//         this._age = 12;
//     }

//     set age(val){
//         if(val < 0){
//             console.log("not")
//             return;
//         }
//         this._age = val;
//     }

//     get age(){}

// }

// let a1 = new Animal();
// a1._age = 27


// class Users{
//     constructor(name,email){
//         this.name = name;
//         this.email = email;
//     }
//     loggedIn(){
//         console.log("loggedIn")
//     }
// }

// let user1 = new Users("Samrat", "Samrat@gmail.com")


// let product  = {
//     name : "Laptop",
//     price: 45000,
//     discoutedPrice: function(){
//         return this.price - 200;
//     }
// }

// console.log(product.discoutedPrice())



// function User(name){
//     this.name = name;
//     this.LoggiedIn = function () {
//       console.log("loggedIn");
//     };
    
// }

// // User.prototype.LoggedIn = function(){
// //     console.log("LoggedIn")
// // }

// let an1 = new User("Ani Bhai");
// let an2 = new User("Sammy Bhai");

function abcd(a,b,c,d){
    console.log(this.name);
}

let obj = {
    name: "Sammy Bhai",
}

abcd.call(obj);  // here we are calling abcd function with obj as this context
abcd.apply(obj,[1,2,3,4]);  // here we are calling abcd function with obj as this context
