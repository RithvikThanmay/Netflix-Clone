function redirectToSignIn() {
    window.location.href = "signin.html";
}


function submitForm(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if(email == "" || password == ""){
        alert("Enter email and password")
    }else{
        window.location.href = "welcome.html";
    }
}

function finish(){
    window.location.href = "plan.html";
}

function next(){
    window.location.href = "next.html";
}

function goNow(){
    window.location.href = "index.html";
}

function redirectToSignout() {
    window.location.href = "logout.html";
}


