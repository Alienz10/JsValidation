let email = document.getElementById("email-field");
let form = document.getElementById("loginForm");
let password = document.getElementById("pwd-field");
let loginButton = document.getElementsByClassName("login-btn");

form.addEventListener('submit',(event) => {
    event.preventDefault();

    // if (validate()){
    //     redirect();
    // };

});

function validate() {
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let isValid = true;
    if (email.value.trim() == ""){ 
        setError(email, "Please enter email*");
        isValid = false;
    }
    // if (!email.value.trim() == "pr10@gmail.com"){ 
    //     setError(email, "Please enter email*");
    //     isValid = false;
    // }
    else if (!email.value.match(emailPattern)){
        setError(email, "Email is not valid*");
        isValid = false;
    }
    else{
        setSuccess(email);
        isValid = true;
    }

    
    if (password.value.trim() == ""){
        setError(password, "Password cannot be empty*");
        isValid = false;
    }
    // if (!password.value.trim() == "pranav@10"){
    //     setError(password, "Password incorrect*");
    //     isValid = false;
    // } 
    else if(password.value.trim().length < 6){
        setError(password, "Password should be strong*");
        isValid = false;
    }
    else{
        setSuccess(password);
        isValid = true;
    }
    return isValid;
}


function setError(element, errorMessage){
    const parent = element.parentElement;
    if (parent.classList.contains('success')){
        parent.classList.remove('success');
    }
    parent.classList.add('error');
    const paragraph = parent.querySelector('span');
    paragraph.textContent = errorMessage;
}

function setSuccess(element){
    const parent = element.parentElement;
    if (parent.classList.contains('error')){
        parent.classList.remove('error');
    }
}

function redirect(){
    if (!email.value.trim() == "pr@gmail.com" && !password.value.trim() == "pranav123"){
        setError(password, "Password incorrect*");
       
    } 
    else{
        window.location.href = "user.html";
    }
}
