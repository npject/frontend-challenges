document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector("#hamburger");
    const menu = document.querySelector("#offcanvas-menu");
    const backdrop = document.querySelector(".backdrop");
    
    const menuItems = document.querySelectorAll(".offcanvas-item");
    const firstItem = menuItems[0];
    const lastItem = menuItems[menuItems.length -1];
    
    let isOpen = false;
    
    menuItems.forEach((item, index) => {
        item.style.setProperty('--i', index);
    });
    
    const setAriaExpanded = (open) => {
        btn.setAttribute("aria-expanded", String(open));
    }
    
    const openMenu = () => {
        isOpen = true;
        menu.classList.add("show");
        btn.classList.add("show-menu");
        backdrop.classList.add("show");
        document.body.classList.add("no-scroll");
        setAriaExpanded(true); 
    }
    
    const closeMenu = () => {
        isOpen = false;
        menu.classList.remove("show");
        btn.classList.remove("show-menu");
        backdrop.classList.remove("show");
        document.body.classList.remove("no-scroll");
        setAriaExpanded(false); 
        btn.focus();
    }
     
    const toggleMenu = () => (isOpen ? closeMenu() : openMenu());
    
    btn.addEventListener("click", toggleMenu);
    backdrop.addEventListener("click", closeMenu);
    
    menu.addEventListener("click", (event) => {
        clickedItem = event.target.closest(".offcanvas-item");
    
        if (clickedItem)
            closeMenu();
    })
    
    document.addEventListener("keydown", (event) => {
        const { key } = event;
    
        if (!isOpen)
            return;
    
        if (key === "Escape") {
            closeMenu();
            return;
        }
    
        if (key !== "Tab")
            return;
        
        if (!event.shiftKey) {
            if (document.activeElement === btn) {
                event.preventDefault();
                firstItem.focus();
            }
            if (document.activeElement === lastItem) {
                event.preventDefault();
                btn.focus();
            }
        }else {
            if (document.activeElement === btn) {
                event.preventDefault();
                lastItem.focus();
            }
            if (document.activeElement === firstItem) {
                event.preventDefault();
                btn.focus();
            }
        } 
    })
})
