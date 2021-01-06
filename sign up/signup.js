function validate() {
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    console.log("you're username is" + username + "and your password is " + password)
    if(username=="admin"&& password=="user")
    {
        alert("login succesful");
        return false;
    }
    else{
        alert("login failed");
    }
}