const user={

    username: "LUCKY",
    price: 89,

    welcomeMessage:function(){
        console.log((`${this.username},welcome`));
        console.log(this)
    }
}

user.welcomeMessage()


// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

const chai = function () {
    let username = "hitesh"
    console.log(this.username);
}

const addtwo=(num1,num2) => {
    return num1+num2   // explicit return

}

// const addtwo= (num1,num2) =>( num1+num2) // implicit return

const addtwo=(num1,num2) => ({username:"LUCKY"})

console.log(addtwo(3,4))