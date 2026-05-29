function setusername(username){

    this.username=username;

    console.log('LUCKYYADAV')

}

function createuser(username,email,password){

    setusername.call(this,username)
    this.email=email
    this.password=password
}

const chai=new createuser("halwa","halwa@gmail","123")
console.log(chai)

