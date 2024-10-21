const promisefour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('error: something went wrong')
        }
    }, 1000)
})

 promisefour.then((user) => {
    console.log(user)
    return user.username
}).then((username) => {

    console.log(username);

}).catch(function(error){
    console.log(error);
})


const promisefive = new Promise(function(resolve, reject){

    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "javascript", password: "123"})
        } else {
        
            reject( 'error:js went wrong' )
        }
    }, 1000)
})

async function consumepromisefive(){

    try{
        const rempose = await promisefive
        console.log(rempose);
    }
    catch(error){

        console.log(error);

    }
}
consumepromisefive()

async function getAllUsers(){
  
    try {
        const rempose = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = Response.json()
        console.log(data);
    }
    catch (error) {
        console.log("E: ", error);
    }
}
getAllUsers()