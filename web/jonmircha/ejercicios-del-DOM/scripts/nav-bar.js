export default function hamburgerNavBar (hamburgerBtn, navBar, menuLink){
    document.addEventListener("click", (event)=>{
        if(event.target.matches(hamburgerBtn) || event.target.matches(`${hamburgerBtn} *`)){
            document.querySelector(hamburgerBtn).classList.toggle("is-active");
            document.querySelector(navBar).classList.toggle("menu--active")
        }
        if(event.target.matches(menuLink)){
            document.querySelector(hamburgerBtn).classList.remove("is-active");
            document.querySelector(navBar).classList.remove("menu--active");
        }
    })
}