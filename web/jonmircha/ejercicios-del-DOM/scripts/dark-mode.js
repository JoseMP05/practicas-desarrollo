export default function darkMode (btn, classDark){
    const themeBtn = document.querySelector(".dark-btn");
    const btnMoon = document.querySelector(".dark-btn__moon");
    const btnSun = document.querySelector(".dark-btn__sun");
    const selector = document.querySelectorAll("[data-dark]");

    function togglerBtns () {
        themeBtn.lastElementChild.classList.add("dark-btn--desable");
        themeBtn.firstElementChild.classList.remove("dark-btn--desable");
        themeBtn.lastElementChild.classList.remove("dark-btn--active");
        themeBtn.firstElementChild.classList.add("dark-btn--active");
        let changeMode = themeBtn.firstElementChild;
        themeBtn.appendChild(changeMode);
    }
    
    document.addEventListener("click", (event)=>{
        if(event.target.matches(btn) || event.target.matches(`${btn} *`) ){
            if(themeBtn.firstElementChild === btnMoon){
                selector.forEach(element=>{ element.classList.add(classDark)})
                togglerBtns();
            }
            else if(themeBtn.firstElementChild === btnSun){
                selector.forEach(element=>{ element.classList.remove(classDark)})
                togglerBtns();
            }
        }
    })
}