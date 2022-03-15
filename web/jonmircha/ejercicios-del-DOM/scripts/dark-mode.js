export default function darkMode (btn, classDark){
    const themeBtn = document.querySelector(".dark-btn");
    const btnMoon = document.querySelector(".dark-btn__moon");
    const btnSun = document.querySelector(".dark-btn__sun");
    const selector = document.querySelectorAll("[data-dark]");

    const darkMode = () =>{
        selector.forEach(element=>{ element.classList.add(classDark)})
        togglerBtns();
        localStorage.setItem("theme","dark")
    }

    const lightMode = () =>{
        selector.forEach(element=>{ element.classList.remove(classDark)})
        togglerBtns();
        localStorage.setItem("theme","light")
    }

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
            if(themeBtn.firstElementChild === btnSun){
                darkMode();
            }
            else if(themeBtn.firstElementChild === btnMoon){
              lightMode();
            }
        }
    })

    document.addEventListener("DOMContentLoaded", (event) =>{
        if(localStorage.getItem("theme") === null)localStorage.setItem("theme", "light");
        //getItem nos permite traer el valor de una variable de tipo storage
        //setItem nos permite añadira o actualizará el la clave y el valor que se le pase al almacenamiento
        if(localStorage.getItem("theme") === "light")lightMode(); 
        if(localStorage.getItem("theme") === "dark")darkMode();     
    })
}