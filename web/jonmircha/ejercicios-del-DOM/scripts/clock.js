export function digitalClock(clock, btnStart, btnStop){
    let clockTempo;

    document.addEventListener("click", (event) =>{
        if(event.target.matches(btnStart)){
            clockTempo = setInterval(()=>{
                let clockHour = new Date().toLocaleTimeString();
                document.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`
            }, 1000);

           event.target.disabled = true;
        }
        if(event.target.matches(btnStop)){
            clearInterval(clockTempo);
            document.querySelector(clock).innerHTML = null;
            document.querySelector(btnStart).disabled = false;
        }
    })
}

export   function alarm(){
      
}