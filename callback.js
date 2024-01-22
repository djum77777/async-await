// callback is like form a relationship between 2 function 
// so function one with a callback function will call function two
//callback is like a function inside a function
function one (calltwo)
{
    console.log("this is step 1.");
    calltwo();
}

function two ()
{
    console.log("this is step 2.");
}

one(two);

//another example using arrow function
//here is the step  
//1. place order -> 2 seconds (function order)
//2. cut the fruits -> 2 seconds (function production)
//3. add water and ice -> 1 seconds (function production)
//4. start the machine -> 1 seconds (function production)
//5. select container -> 2 seconds (function production)
//6. select topping -> 3 seconds (function production)
//7. serve ice cream ->2 seconds. (function production)
//order -> produce, so we will have 2 function, if got customer order , then the production team will
//start to produce base on order. this is the relationship between 2 function

//we create all the ingredients using object and arrays inside the object
let stocks ={
    fruit:["strawberry","grape","banana","apple"],
    holder:["cone","cup","stick"],
    liquid:["water","ice"],
    topping:["chocolate","peanut"]
}

//we make 2 related function order and production
let order =(fruit_selection,call_production)=> //call_production is a callback parameter
{
    setTimeout(()=>
    {
        console.log(`${stocks.fruit[fruit_selection]} was selected`);
        call_production(); //if we put the callback here, means we need to wait 2second until
        //fruits selected then the production will start
    }
    ,2000) //interval 2 seconds step 1 place order
    //call_production(); //if we put the callback here,
    //means the production will start before the fruits was selected
}

let production=()=>
{
    setTimeout(()=>
    {
        console.log("order received, production started"); //this one run first
        setTimeout(()=>
            {console.log("chopping fruits");
            setTimeout(()=>
            {
                console.log(`${stocks.liquid[0]},${stocks.liquid[1]} is added`); //array object
                setTimeout(()=>
                {
                    console.log("the machine was started");
                    setTimeout(()=>
                    {
                        console.log(`using a ${stocks.holder[0]}`);
                        setTimeout(()=>
                        {
                            console.log(`put ${stocks.topping[1]} as a topping`);
                            setTimeout(()=>
                            {
                                console.log("Ice Cream is ready to served");
                            },2000)//ready to served
                        },3000) //put toppings
                    },2000) //holder selection
                },1000) //start the machine
            },1000) //add water and ice
        },2000) //chopping fruits
    },0000) //order received
    //this timeout will run after 0 seconds
}

order(0,production); //a function inside a function
//callback forming a relationship like building a family tree 
//grandparent,parent,child,grandchild,grand grand child and etc