// class Sketch{
//     constructor(){
//         this.Character = "Doremon";
//         this.color = "Blue";
//         this.friend = function(){};
//     }
// }

// Sketch.prototype.speak = function(){};
// Sketch.prototype.getColor = function(){};

// new Sketch()

// call



let obj = {
    name : "Sammy Bhai",
};

function abcd(a,b,c,d){
    console.log(this, a,b,c,d);
}

let newFunc = abcd.call(obj, 1,2,3,4);  // here we are calling abcd function with obj as this context

newFunc();