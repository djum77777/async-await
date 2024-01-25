//latihan promise

function promise(x){ 
Janji =new Promise((setuju,tolak)=>{
    if(x==="tepat"){
    setuju("coba promise");}
    else{
    tolak("tidak tepati janji")}
})
.then((result)=>{console.log(result);})
.catch((result)=>{console.log(result);})
}
//console.log(Janji);
console.log(promise(""));

const x=(a)=>a*5
console.log(x(3));

function coba(x){
const baru=new Promise((isi,kosong)=>
{
if (x==0){isi("ada isinya")}
else {kosong("tidak ada apa-apa")}
})
.then((hasil)=>{console.log(hasil);})
.catch((hasil)=>{console.log(hasil);})

}
console.log(coba(0));