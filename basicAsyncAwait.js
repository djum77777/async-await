const prompt = require('prompt-sync')();
function shop(buka)
{
    buka=prompt ("status toko open atau close?")
    return new Promise ((resolve,reject)=>
    {
        if (buka=="open")
        {resolve(console.log("shop is open,continue the order"));}
        else
        {reject(console.log("shop is closed"));}
    })
}

function process(status,time)
{
    return new Promise((resolve,reject)=>
    {
        setTimeout(resolve,time);
    })
}

async function order ()
{
    try
    {
        await shop("open"); //this function is not declare yet and it will send error message
        //but will still running to the next step : catch
        process(console.log("prepare for order"),1000)
        process(console.log("order done"),2000)
        //console.log("prepare for order")
        //process(2000)
        //console.log("order done")
    }
    catch(err)
    {
        console.log("please come back tommorrow",err);
    }
    finally
    {
        console.log("Thank you");
    }
}
order();

