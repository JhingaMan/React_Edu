function setUserName(username){
    //complex DB calls
    this.username = username
    console.log("It was called")

}

function createUser(username,email,password){
    setUserName.call(this,username) //passed this for the context of createUser
    this.email = email
    this.password = password
}

const user1 = new createUser("JhingaMan",
    "epicboy1208@gmail.com", "kugu1208"
)
console.log(user1)