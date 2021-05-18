function validation() {
    var lowercase = /[a-z]/g
    var uppercase = /[A-Z]/g
    var numbers = /[0-9]/g
    var phone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
    var pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/
    var text = document.getElementById('text');
    var numberError = document.getElementById('numberError');
    var emailError = document.getElementById('emailError');
    var passError1 = document.getElementById('passError1');
    var passError2 = document.getElementById('passError2');
    var passError3 = document.getElementById('passError3');
    var passError4 = document.getElementById('passError4');
    var passError5 = document.getElementById('passError5');
    var number = document.getElementById('number').value;
    var mail = document.getElementById('email').value;
    var pass = document.getElementById('password').value;
    var conPass = document.getElementById('conPassword').value;
    var name = document.getElementById('name').value;
    var nameError = document.getElementById('nameError');
    var org = document.getElementById('org').value;
    var orgError = document.getElementById('orgError');
    //check name
    checkName(name, nameError);
    //check organization
    checkName(org, orgError);
    //check password
    checkPassword(pass, passError1, 0);
    checkPassword(pass, passError2, lowercase);
    checkPassword(pass, passError3, uppercase);
    checkPassword(pass, passError4, numbers);
    confirmPassword(pass, passError5, conPass);
    // check country
    validateCountry();
    //check registration
    ValidateForm();
    //check number
    checkNUMEmail(number, numberError, phone);
    // check email
    checkNUMEmail(mail, emailError, pattern);
}
// function to check phone number and email
function checkNUMEmail(entry, error, pattern) {
    if (entry.match(pattern)) {
        if (error.style.display = 'block') {
            error.style.display = 'none';
        }
    } else {error.style.display = 'block'}
}
// function to check name and organization
function checkName(name, nameError) {
    if (name === '') {
        nameError.style.display = 'block';
    }
    else {
        nameError.style.display = 'none';
    }
}
//function to check password
function checkPassword(pass, error, compare) {    
// check for password to be at least 10 characters
    if (compare == 0) {
        if (pass.length >= 10) {
            if (error.style.display = 'block') {
                error.style.display = 'none';
            }
        } else if (pass.length < 10) { error.style.display = 'block'; }
    }
// check if password meets requirements
    else if (pass.match(compare)) {
            if (error.style.display = 'block') {
                error.style.display = 'none';
            }
        } else { error.style.display = 'block'; }
}
// function to check passwords match
function confirmPassword(pass, error, conPass) {
    if (pass != conPass) {
        error.style.display = 'block'
    } else if (error.style.display = 'block') {
            error.style.display = 'none';
        }
}
// function to validate country
function validateCountry(){
    var country = document.getElementById('country').value;
    var conError = document.getElementById('conError');
    if (country == "0") {
        conError.style.display = 'block'
    } else if (conError.style.display = 'block'){
            conError.style.display = 'none'
        }
}
//function to validate registration type
function ValidateForm() {
    var author = document.getElementById('author').checked;
    var participant = document.getElementById('participant').checked;
    var student = document.getElementById('student').checked;
    var regError = document.getElementById('regError');
    if ((author == true) || (participant == true) || (student == true)) {
       if (regError.style.display = 'block') {
            regError.style.display = 'none';
       }
    } else {
            regError.style.display = 'block';
    }
}