function valid() {
    const firstName = document.querySelector("#firstName");
    const lastName = document.querySelector("#lastName");
    const email = document.querySelector("#email");
    const pass = document.querySelector("#pass");
    let isValidate = true;
    [firstName,lastName,email,pass].forEach(item=>{
        if(!item.value.trim()){
            item.classList.add("is-invalid");
            document.querySelector(`#feedback-${item.id}`).classList.add("invalid-feedback");
            document.querySelector(`#feedback-${item.id}`).innerText = 
            `${item.placeholder} cannot be empty.`;
            isValidate = false;
            return;
        }else{
            item.classList.remove("is-invalid");
        }
    })
    const regexEmail = /^\S+@\S+\.\S+$/;
    let validEmail = regexEmail.test(email.value);
    console.log("validation email:",validEmail);
    if(!validEmail){
        email.classList.add("is-invalid");
        document.querySelector("#feedback-email").classList.add("invalid-feedback");
        document.querySelector("#feedback-email").innerText =
        `Looks like this is not an email`;
        isValidate = false;
    }else{
        email.classList.remove("is-invalid");
    }
    const regexPass = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    let validPass = regexPass.test(pass.value);
    if(!validPass){
        pass.classList.add("is-invalid");
        document.querySelector("#feedback-pass").classList.add("invalid-feedback");
        document.querySelector("#feedback-pass").innerText = 
        `At least one upper case English letter,
        At least one lower case English letter,
        At least one digit,
        At least one special character,
        Minimum eight in length.`;
        isValidate = false;
    }else{
        pass.classList.remove("is-invalid");
    }
    return isValidate;
}