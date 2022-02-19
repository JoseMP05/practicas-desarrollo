import hamburgerNavBar from "./nav-bar.js";
import {digitalClock, alarm} from "./clock.js"

document.addEventListener("DOMContentLoaded",(event) =>{
    hamburgerNavBar(".hamburger", ".menu", ".menu__link");
    digitalClock("#clock", ".start-clock", ".stop-clock")
})