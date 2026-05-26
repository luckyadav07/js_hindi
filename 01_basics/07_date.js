

let mydate=new Date()

console.log(mydate)

console.log(mydate.toString());
 console.log(mydate.toDateString());

 console.log(typeof mydate);

let mycreateddate=new Date(2023,0,23)

console.log(mycreateddate.toDateString())
console.log(mydate.toLocaleString());

 
 let timestamp=Date.now()

 console.log(timestamp);

console.log(Date.now());


let newdate= new Date();

console.log(newdate);
console.log(newdate.getMonth()+1);

newdate.toLocaleString('default',{
    weekday: "long"

})

console.log(newdate);
