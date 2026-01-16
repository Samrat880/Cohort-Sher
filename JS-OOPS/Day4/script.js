// function weatherData(cb,address){
//     setTimeout(() => {
//         address({
//             temperature: 25,
//             humidity: 80,
//             address: cb
//         })
//     },3000)
// }

// weatherData("Patna", function (data){
//     console.log(data)
// })

// function afterDelay(time,cb){
//     setTimeout(() => {
//         cb(
//             {id : time, status: "done"}
//         );
//     }, time);
// }

// afterDelay(8000, function (data) {
//   console.log("callback Executed");
//   console.log(data);
// });


// function getUser(username,cb){
//     console.log("Getting user details...")
//     setTimeout(() => {
//         cb({
//             id : 1,
//             username : username
//         })
//     }, 1000);
// }

// function getUserPosts(id,cb){
//     console.log("Getting user posts...")
//     setTimeout(()=> {
//         cb (["post1", "post2", "post3"])
//     }, 2000)
// }

// getUser("Samrat", function(data){
//     getUserPosts(data.id, function(allposts){
//         console.log(data.username, allposts)
//     })
// })


// Promises

// const prm = new Promise( (res, rej) => {
//     setInterval(() => {
//         rej();
//     },3000);
// });

// prm.then( ()=> {
//     console.log("Sammy bhai")
// })
// .catch( () => {
//     console.log("Promise Rejected")
// });


// fetch("https://randomuser.me/api/")
// .then((notRead) => notRead.json())
// .then( (readData) =>  {
//     console.log(readData.results[0].name.first+ " " + readData.results[0].name.last);
// })
// .catch( (err) => {
//     console.log("Error occured: ", err);
// })

// async function User() {
//     const data = await fetch("https://randomuser.me/api/");
//     const parasData = await data.json();
//     console.log(parasData.results[0].name.first)
// }

// User();


function asyncTask(){

    return new Promise((res,rej) => {
        setTimeout(() => {
            let v = Math.floor(Math.random()*10);
            if ( v > 5 ){
                res(true);
            }rej(false);
        },1000)
    })
} 

async function task() {
    try{

        let v = await asyncTask()
        console.log(v)
    } catch(e){
        console.log(e)
    }
}

task()