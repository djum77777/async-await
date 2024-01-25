//here is the step  
//1. place order -> 2 seconds (function order)
//2. cut the fruits -> 2 seconds (function production)
//3. add water and ice -> 1 seconds (function production)
//4. start the machine -> 1 seconds (function production)
//5. select container -> 2 seconds (function production)
//6. select topping -> 3 seconds (function production)
//7. serve ice cream ->2 seconds. (function production)

let stocks ={
    fruit:["strawberry","grape","banana","apple"],
    holder:["cone","cup","stick"],
    liquid:["water","ice"],
    topping:["chocolate","peanut"]
}
let is_shop_open = true; //asking if the shop open or not
//let is_shop_open=false; //if shop is closed
//relationship between time and work, if shop is open (time)
//then we work (work)
let order=(time,work)=>
{
    return new Promise((resolve,reject)=>
    {
        if(is_shop_open) //run this when true
        {
            setTimeout(()=> //order will be placed with 2000 milisecond
            {
                resolve(work()); //shop is open
            },time); //time will be 2000 milisecond step 1
        }
        else
        {
            reject(console.log("shop is closed"));
        }
    });
};

order(2000,()=>console.log(`${stocks.fruit[0]} was selected`)) 
//2000 is time for place order and we put arrow function for the 1st step, order placed and fruit selected

.then(()=>
{
    return order(000,()=>
    {
        console.log("production has started");
    })
})
.then(()=>
{
    return order(2000,()=>
    {
        console.log("the fruit was chopped");
    }) 
})

.then(()=>
{
    return order(1000,()=>
    {
        console.log(`${stocks.liquid[0]} ${stocks.liquid[1]} are selected`);
    })
})

.then(()=>
{
    return order(1000,()=>
    {
        console.log("the machine has started");
    }) 
})

.then(()=>
{
    return order(2000,()=>
    {
        console.log(`Ice cream was put on a ${stocks.holder[2]}`);
    })
})

.then(()=>
{
    return order(3000,()=>
    {
        console.log(`${stocks.topping[1]} topping was added`);
    })
})

.then(()=>
{
    return order(2000,()=>
    {
        console.log("Ice cream ready to served");
    })
})

.catch(()=> {console.log("customer left");}) //rejection

.finally(()=> //final statement either resolve or reject will end with finally
{
    console.log("day ended, shop is closed");
})
