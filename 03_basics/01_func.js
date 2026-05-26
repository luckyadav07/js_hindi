function saymyname(){
    console.log("l");
    console.log("u");
    console.log("c");
    console.log("y");
    console.log("y");
}

saymyname()

function addnum(number1,number2){
    console.log((number1+number2));

    return number1+number2
    
}

const result=addnum(2,49)

console.log("result : " , result );

function loginusermsg(username){
    return `${username}  just logged in`  
    
}
console.log((loginusermsg("LUCKY")));



function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}



function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// gives after 2 values in array

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));