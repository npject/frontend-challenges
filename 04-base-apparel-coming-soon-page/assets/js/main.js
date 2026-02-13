document.querySelector("#inputEmail button").addEventListener('click',() => {
    let input = document.querySelector("#inputEmail input");
    let email = document.querySelector("#inputEmail input").value.trim();
    let feedback = document.querySelector("#inputEmail + p");
    if(email == ''){
        input.classList.add("invalid-custom");
        feedback.classList.add("invalid-feedback-custom");
        feedback.innerText = "please provide a valid email";
    }else{
        input.classList.remove("invalid-custom");
        feedback.classList.remove("invalid-feedback-custom");
        feedback.innerText = "";

    }
});