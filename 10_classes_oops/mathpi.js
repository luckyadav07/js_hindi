const desc=Object.getOwnPropertyDescriptor(Math,"PI")

// console.log(desc)

// Math.PI=23

// console.log(Math.PI)


const chai={
    name:'oyye yeah ',
    price: 250,
    isava:true,
    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(chai.orderChai)

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
    //writable: false,
    enumerable: false,
    
})
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }

}