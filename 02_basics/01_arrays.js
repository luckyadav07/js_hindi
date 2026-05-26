const arr=[0,1,2,3,4,5, true,"LUCKY"]

// console.log(arr);

const myarr=new Array(1,2,2,3,3,56)
 myarr.push(68)

//  console.log(myarr);
 
 myarr.unshift(0)

// console.log(myarr.includes(3));

// console.log(myarr.indexOf(3));

const newarr=myarr.join()

console.log(newarr);



//   console.log(myarr);

//SLICE ,SPLICE

console.log("A",myarr);

const myn1=myarr.slice(1,4);

console.log(myn1);

console.log("B",myarr)


const myn2=myarr.splice(1,3)

console.log("C",myarr)
console.log(myn2)

// DEKHO BETA 
// SLICE prints the array from index 1 to 4 excluding 4
// SPICE manipulated the array it cuts really the array and i prints from 1 to 4
