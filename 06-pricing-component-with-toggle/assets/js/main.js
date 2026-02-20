const priceBasic = document.querySelector("#price-basic");
const priceProfessional = document.querySelector("#price-professional");
const priceMaster = document.querySelector("#price-master");
const switchToggle = document.querySelector("#switchToggle");
switchToggle.addEventListener('change',switchPrices); 
function switchPrices () {
    let isChecked = switchToggle.checked;
    if(isChecked){
        priceBasic.innerText = `199.99`;
        priceProfessional.innerText = `249.99`;
        priceMaster.innerText = `399.99`;
    }else{
        priceBasic.innerText = `19.99`;
        priceProfessional.innerText = `24.99`;
        priceMaster.innerText = `39.99`;
    }
}
document.addEventListener('keydown',(ev) => {
    if(ev.keyCode === 37){
        switchToggle.checked = true;
        switchPrices()
    }
    if(ev.keyCode === 39){
        switchToggle.checked = false;
        switchPrices()
    }
    
})