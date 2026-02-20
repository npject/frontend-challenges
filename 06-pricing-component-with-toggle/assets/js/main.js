const priceBasic = document.querySelector("#price-basic");
const priceProfessional = document.querySelector("#price-professional");
const priceMaster = document.querySelector("#price-master");
const switchToggle = document.querySelector("#switchToggle");
switchToggle.addEventListener('change', (ev) => {
    let isChecked = ev.target.checked;
    if(isChecked){
        priceBasic.innerText = `199.99`;
        priceProfessional.innerText = `249.99`;
        priceMaster.innerText = `399.99`;
    }else{
        priceBasic.innerText = `19.99`;
        priceProfessional.innerText = `24.99`;
        priceMaster.innerText = `39.99`;
    }
})