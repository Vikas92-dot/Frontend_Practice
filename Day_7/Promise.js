// const myPromise = new Promise((resolve,reject)=>{
//     let success = false;

//     if(success){
//         resolve("Resolved successfully.");
//     }else{
//         reject("Rejected.")
//     }
// });

// myPromise.then(res=>{
//     console.log(res);
// }).catch(err=>{
//     console.log(err);
// })

//Async / Await

async function myDisplay() {
    let myPromise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Good Evening");
        },3000);
    })
    let result = await myPromise;
    console.log(result);
}
// myDisplay();