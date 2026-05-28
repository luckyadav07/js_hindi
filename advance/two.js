const promiseOne = new Promise(function(resolve, reject){

    setTimeout(() => {
        console.log('Async task completed')
        resolve()
    }, 1000)

})

promiseOne.then(function(){
    console.log("Promise consumed")
})


const promisetwo= new Promise(function(resolve,reject){

    resolve({
        username:'LUCKY',
        email:'lfheie'
    })
})

promisetwo.then(function(user){
    console.log(user)
})

const promiseThree = new Promise(function(resolve, reject){

    let error = true

    if(!error){
        resolve({username: "Lucky"})
    } else {
        reject("ERROR: Something went wrong")
    }

})

promiseThree
.then(function(user){
    console.log(user)
})
.catch(function(error){
    console.log(error)
})
.finally(() => {
   console.log("Promise completed")
})


const promiseFour = new Promise((resolve,reject)=>{

    setTimeout(() => {
        resolve({username:"Lucky", password:"123"})
    },1000)

})

promiseFour
.then((user)=>{
    console.log(user)
    return user.username
})
.then((username)=>{
    console.log(username)
})



async function consumePromise(){

    try{

        const response = await promiseFour //await is useful
        console.log(response)

    } catch(error){

        console.log(error)

    }

}

consumePromise()


fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})