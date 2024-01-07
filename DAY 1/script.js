function savedata(e){
    e.preventDefault()
    let username = document.getElementById("username").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let psw = document.getElementById("psw").value
    
    //console.log(username,email,password,psw)//
    let data = {username , email,password,psw}
    console.log(data)
    function validity(){
        if(password === psw){
            localStorage.setItem(data.email,JSON.stringify(data))
        }else{
            alert("invalid password ")
        }
        

    }
    validity()
    

}

