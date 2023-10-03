

let XLMHttpRequest=require('xhr2');

let xhr=new XLMHttpRequest();

xhr.open('GET','https://restcountries.com/v3.1/all');
xhr.onload=function(){
let users=JSON.parse(xhr.responseText);

//users.forEach(function(obj) 
for (var i=0;i<users.length;i++){
    if(users[i].currencies!=undefined){
        Object.keys(users[i].currencies).forEach((key)=>{

            if(key==="USD"){
                console.log(users[i].currencies)
            }
            })
        }
    
    }
};
xhr.send();
