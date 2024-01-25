let status ="No Error"
let checkError=new Promise ((resolve,Reject)=>
{
    if(status=="No Error")
    {
        resolve("go on")
    }
    else
    {
        reject("Error")
    }
})
.then((resolve)=>
{
    console.log(resolve);
})
.catch((reject)=>
{
    console.log(reject);
})
.finally((end)=>
{
    console.log("end of PROMISE process");
})