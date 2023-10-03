

let XLMHttpRequest=require('xhr2');

let xhr=new XLMHttpRequest();

xhr.open('GET','https://restcountries.com/v3.1/all');
xhr.onload=function(){
let users=JSON.parse(xhr.responseText);

//users.forEach(function(obj) 
let valueuser=users.reduce((value,popula)=>
  value+popula.population,0)
   


console.log(valueuser)
   
};
xhr.send();
