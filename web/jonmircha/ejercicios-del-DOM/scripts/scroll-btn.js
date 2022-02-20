export default function scrollButton (btn){
    const scrollbtn = document.querySelector(btn);
        window.addEventListener("scroll", () =>{
            let scroll = window.pageYOffset || document.documentElement.scrollTop // cualqquiera de las dos propiedades nos permite conocer el valor en px del scroll
            if(scroll > 600){
                scrollbtn.classList.remove("scroll-btn--desable")
            }
            else{
                scrollbtn.classList.add("scroll-btn--desable")
            }
        })
        document.addEventListener("click", (event) =>{
            if(event.target.matches(".scroll-btn")) {
                window.scrollTo({
                    behavior: "smooth",
                    top: 0
                })
            }
        })
        
    }