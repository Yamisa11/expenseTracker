var users=[]
if(localStorage.getItem("users")){
    users = JSON.parse(localStorage.getItem('users'))}

console.log(users)
// functin to submit data from registration
function Submit(){
    var username= document.getElementById("lgnUserN").value;
    var emailr=document.getElementById("emailr").value;
    var income=document.getElementById("income").value;
    var passwordr=document.getElementById("lgnPswd").value;
    var pass= document.getElementById("VPswd").value
    // checks if password entered matches the password reconfirmation
    if (passwordr===pass){
        var user={
            username:username,
            email2:emailr,
            income:income,
            password2:passwordr
        }
        users.push(user)
    localStorage.setItem('users',JSON.stringify(users))
    alert("You have successfully registered!");
    window.location.href = "history.html";
    }
    else{alert("Passwords do not match")}
   
}
// function for logging in
function Login(){
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    var logUser={
        email1:email,
        password1:password
    }
    console.log(users)
    for (let i = 0; i < users.length; i++) {
        if( (logUser.email1===users[i].email2) && (logUser.password1===users[i].password2)) {
            alert("You are logged in")
            window.location.href = "first.html";
        } 

}
}

//  Adding Expenses

// var expenses=[]
// if(localStorage.getItem("expenses")){
//     expenses = JSON.parse(localStorage.getItem('expenses'))}

// console.log(expenses)
// function to add expenses to local storage
// function addRecord(){
//     var date= document.getElementById("date").value;
//     var description= document.getElementById("description").value;
//     var category= document.getElementById("category").value;
//     var amount=document.getElementById("amount").value;
    
//         var expense={
//             date:date,
//             description: description,
//             category:category,
//             amount:amount
//         }
//         expenses.push(expense)
//     localStorage.setItem('expenses',JSON.stringify(expenses))
 
// }

// Authanticating User
// Login
// document.getElementById("btnLogin").addEventListener("click", usrAuth)

// function usrAuth(){
//     var usr = document.getElementById("lgnUserN").value
//     var lPswd = document.getElementById("lgnPswd").value

//     let userAuth = localStorage.getItem(username,username)
//     let pwdAuth = localStorage.getItem(password2,passwordr)

//     if (usr == userAuth){

//     }
//     else{
//         alert("Invaling Username/Password")
//     }
// }




