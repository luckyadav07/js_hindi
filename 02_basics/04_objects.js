const tinder = {}

tinder.id = "1234"
tinder.name = "LUCKY"
tinder.isLoggedIn = false

console.log(tinder)

const regUser = {
    email: "LKYCEN",
    fullName: {
        firstName: "LUCKY",
        lastName: "YADAV"
    }
}

console.log(regUser.fullName)

const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "a",
    4: "b"
}

const obj3 = { ...obj1, ...obj2 }

console.log(obj3)

console.log(Object.keys(tinder))
console.log(Object.values(tinder))

console.log(tinder.hasOwnProperty('id'))

const course = {
    courseName: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

const { courseInstructor: instructor } = course

console.log(instructor)