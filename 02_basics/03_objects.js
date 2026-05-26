//singleton

// object literals

const mysym=Symbol("key1")


const jsuser={
    name:"LUCKY",
    [mysym]:"mykey1", // symbol syntax[]
    age:18,
    email:"LUCKYADAV61715@GMAIL.COM",
    isloggedin:false
}

 console.log((jsuser.name));
 console.log(jsuser[mysym])

 // value can be access thorugh . or []

 jsuser.email="OHYEAH@GMAI.MXOM"

//  Object.freeze(jsuser)// cant change now anuthing

 console.log(jsuser);

 jsuser.greeting=function(){
    console.log("HELLO GUYS");
    
 }

 jsuser.greeting2=function(){
    console.log(`HELLO GUYS ,${this.name}`);
    
 }

 console.log(jsuser.greeting());
  console.log(jsuser.greeting2());

 


 


 
 
 
 
