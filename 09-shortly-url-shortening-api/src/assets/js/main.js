let isOpen;

const menuItems = document.querySelectorAll(".offcanvas-item");
menuItems.forEach((item, index) => {
    item.style.setProperty('--i', index);
});

const toggleMenu = () => {
    const btn = document.querySelector("#hamburger");
    const menu = document.querySelector("#offcanvas-menu");
    menu.classList.toggle("show");
    btn.classList.toggle("show-menu");
    document.querySelector("body").classList.toggle("no-scroll");
    isOpen = (btn.ariaExpanded === "true");
    btn.ariaExpanded = !isOpen;
    isOpen = !isOpen; 
    if (isOpen === true) {
        document.querySelector("body").innerHTML += `<div class="backdrop" onclick="toggleMenu()"></div>`;
    }else {
        document.querySelector(".backdrop").remove();
    }
        
}

//menuItems.forEach(item => item.addEventListener("click", toggleMenu));

// document.querySelector(".backdrop").addEventListener("click", () => {debugger
//     if(isOpen === true) 
//         toggleMenu();
// })

document.addEventListener("keydown", (event) => {
    const { key } = event;
    const btn = document.querySelector("#hamburger");

    if (isOpen === true && key === "Escape")
        toggleMenu();

    if (isOpen === true && key === "Tab") {
        if (!event.shiftKey) {
            if (document.activeElement === btn) {
                event.preventDefault();
                menuItems[0].focus();
            }
            if (document.activeElement === menuItems[menuItems.length -1]) {
                event.preventDefault();
                btn.focus();
            }
        }else {
            if (document.activeElement === btn) {
                event.preventDefault();
                menuItems[menuItems.length -1].focus();
            }
            if (document.activeElement === menuItems[0]) {
                event.preventDefault();
                btn.focus();
            }
        }
    }
})
