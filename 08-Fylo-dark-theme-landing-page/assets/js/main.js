function valid() {
    const emailInput = document.querySelector("#email");
    let isValidate = true;
    if(!emailInput.value.trim()){
        emailInput.classList.add("is-invalid");
        document.querySelector(`#feedback-${emailInput.id}`).classList.add("invalid-feedback");
        document.querySelector(`#feedback-${emailInput.id}`).innerText = 
        `email cannot be empty.`;
        isValidate = false;
        return isValidate;
    }else{
        emailInput.classList.remove("is-invalid");
    }
    const regexEmail = /^\S+@\S+\.\S+$/;
    let validEmail = regexEmail.test(emailInput.value);
    if(!validEmail){
        emailInput.classList.add("is-invalid");
        document.querySelector("#feedback-email").classList.add("invalid-feedback");
        document.querySelector("#feedback-email").innerText =
        `Please enter a valid email address`;
        isValidate = false;
    }else{
        emailInput.classList.remove("is-invalid");
    }
    return isValidate;
}
