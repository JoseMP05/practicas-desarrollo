import hamburgerNavBar from "./nav-bar.js";
import {digitalClock, alarm} from "./clock.js"
import { shortcuts } from "./keywords.js";
import scrollButton from "./scroll-btn.js";

document.addEventListener("DOMContentLoaded",(event) =>{
    hamburgerNavBar(".hamburger", ".menu", ".menu__link");
    digitalClock("#clock", ".start-clock", ".stop-clock");
    scrollButton(".scroll-btn");
})

document.addEventListener("keydown", () =>{
    shortcuts(event)
})