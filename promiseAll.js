//promiseAll run all promises

const record1= new Promise((resolve,reject)=>
{
    console.log("done recorded video 1");
})


const record2= new Promise((resolve,reject)=>
{
    console.log("done recorded video 2");
})

const record3= new Promise((resolve,reject)=>
{
    console.log("done recorded video 3");
})

Promise.all( 
    [
        record1,
        record2,
        record3
    ]
) //will run all promises in array form
.then((message)=>
{
    console.log(message);
})
