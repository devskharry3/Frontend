
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const savedDetails = document.getElementById('savedDetails');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (checkInput()) {
        saveDetails();
        displayDetails();
    }
});

function checkInput(){
    //get the values from the input
    const usernameValue = username.value.trim(); //trim removes all the white spaces 
    const emailValue =  email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim(); 

    let isValid = true;


if(usernameValue === ''){
    //show error 
    //add error class
    setErrorfor(username, `Username cannot be be blank`);
    isValid = false;
} else{
    //add success class
    setSuccessFor(username);
}

if(emailValue === ''){
    setErrorfor(email, `Email cannot be blank`);
    isValid = false;
} else if(!isEmail(emailValue)){
    setErrorfor(email, `Email is not valid`);
    isValid = false;
} else{
    setSuccessFor(email);
}


if(passwordValue === ''){
    setErrorfor(password, `Password cannot be blank`);
    isValid = false;
}
else if(passwordValue.length < 8) {
    setErrorfor(password, "Passowrd length must be at least 8 characters");
    isValid = false;
} else if (passwordValue.length > 15) {
    setErrorfor(password, "Passowrd must not exceed 15 characters");
    isValid = false;
} else if (!isComplexPassword(passwordValue)) {
    setErrorfor(password, 'Password must conatin at least one uppercase letter, one lower case letter, one number and one special character');
    isValid = false;
} else {
    setSuccessFor(password);
}


if(password2Value === ''){
    setErrorfor(password2, "Password2 cannot be blanked");
    isValid = false;
} else if(passwordValue !==password2Value) {
    setErrorfor(password2, "Passwords does not match");
    isValid = false;
} else{
    setSuccessFor(password2);
}
   return isValid

}

function setErrorfor(input, message) {
    const formControl = input.parentElement; //form-control
    const small = formControl.querySelector('small');

    //add error message inside small
    small.innerText = message;

    //add error class
    formControl.className = 'form-control error'; //immediately this error was added here we removed the one from html and the error worked with js

}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}

function isEmail(email) {
   return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);

}

function isComplexPassword(password) {
    //Regex to check for at least one uppercase letter, one lower case letter, one number and one special character
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^])[A-Za-z\d@$!%*?&#^]{8,15}$/.test(password);
}

function saveDetails(){
    const userDetails = {
        username: username.value.trim(),
        email: email.value.trim(),
        password: password.value.trim(),

    };
    localStorage.setItem('userDetails', JSON.stringify(userDetails));
}


function displayDetails() {
    const userDetails = JSON.parse(localStorage.getItem('userDetails'));
    if (userDetails) {

    savedDetails.innerHTML = `
    <h3>Saved Details:</h3>
    <p>Username: ${userDetails.username}</p>
    <p>Email: ${userDetails.email}</p>
    <p>Password: ${userDetails.password}</p>`;

    
    }

}

if(localStorage.getItem('userDetails')) {
    displayDetails();
}

