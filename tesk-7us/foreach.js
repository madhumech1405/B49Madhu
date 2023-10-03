
let XLMHttpRequest=require('xhr2');

let xhr=new XLMHttpRequest();

xhr.open('GET','https://restcountries.com/v3.1/all');
xhr.onload=function(){
let users=JSON.parse(xhr.responseText);

users.forEach(function(obj) { 
  //Object.entries(users).forEach((key,valu)=>{

  //console. log(users.filter(users=>users.population<200000)
{
   let a=[]
   let b=[]
   let c=[]
   a.push(obj.flags)  
   console.log(a)
   b.push(obj.capital)
 c.push(obj.name.official)
   console.log(b)   
   console.log(c)
   


}
});
}
xhr.send();
