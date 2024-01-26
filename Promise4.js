//first step declare the npm
const myText = require('prompt-sync')();
var colors = require('colors');
colors.setTheme({
  custom: ['rainbow', 'underline']
});

//fifth step, code the input
const fillText=myText("input your text :")
const status=myText("make it colorful? (Y/N)?")

//second step, form the promise function
const myPromise=new Promise ((resolve,reject)=>
{
  
  if (status=="Y")
  {
    setTimeout(resolve((`colorful life : ${fillText.custom}`)),1000);   
  }
  else
  {
    reject(`here is your text : ${fillText}`)
  }
})

//fourth step, declare condition
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