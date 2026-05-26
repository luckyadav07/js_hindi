 const tinder=new Object()



 tinder.id="1234"
 tinder.name="LUCKY"
 tinder.isloogesin=false

 console.log(tinder);

 const reguser={

    email:"LKYCEN",
    fullname:{
        username:{
            firstname:"LUCKY",
            lastname:"YADAV"
        }
    }
 }

 console.log(reguser.fullname);

 const obj1={
    1:"a",
    2:"b"
 }

 const obj2={
    3:"a",
    4:"b"
 }

//  const obj3=Object.assign({},obj1,obj2)
//  console.log(obj3);

 const obj3={...obj1,...obj2} // latest usuage
 
//   console.log(obj3);

const users=[
    {

    }
]

console.log(tinder)

console.log(Object.keys(tinder));
console.log(Object.values(tinder));

console.log(tinder.hasOwnProperty('id')) ;

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]



 






 