let mainCard = document.querySelector(".main");
let section2 = document.querySelector(".sec2");
let form = document.getElementById('form');
let firstName = document.getElementById('fname');
let lastName = document.getElementById('lname');
let email = document.getElementById('email');
let password = document.getElementById('password');
let errorImage = document.getElementsByClassName("error-img")
let button = document.getElementById("btn");

// console.log('>>>>>>>>>>', errorImage)


button.addEventListener('click', e => {
    e.preventDefault();

    validateInputs();
});

let setError = (element, message) => {
    let inputControl = element.parentElement;
    let errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
    for(let i=0; i<errorImage.length; i++){
        errorImage[i].style.display = "flex";
    }
};

let setSuccess = element => {
    let inputControl = element.parentElement;
    let errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
    for(let i=0; i<errorImage.length; i++){
        errorImage[i].style.display = "none";
    }
};

function isValidEmail(email) {
    const re = /\S+@\S+\.\S+/
    return re.test(email)
}

let validateInputs = () => {
    let fnameValue = firstName.value.trim();
    let lnameValue = lastName.value.trim();
    let emailValue = email.value.trim();
    let passwordValue = password.value.trim();

    if(fnameValue === '') {
        setError(firstName, 'First Name cannot be empty');
    } else {
        setSuccess(firstName);
    }

    if(lnameValue === '') {
        setError(lastName, 'Last Name cannot be empty');
    } else {
        setSuccess(lastName);
    }

    if(emailValue === '') {
        setError(email, 'Email cannot be empty');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Looks like this is not an email');
    } else {
        setSuccess(email);
    }
    if(passwordValue === '') {
        setError(password, 'Password cannot be empty');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }
}
