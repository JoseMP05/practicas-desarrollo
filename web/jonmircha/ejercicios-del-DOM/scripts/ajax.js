(()=>{
    const xhr = new XMLHttpRequest();
    const xhrDOM = document.getElementById('xhr');
    const fragment = document.createDocumentFragment();

    xhr.addEventListener("readystatechange", event =>{
        if(xhr.readyState !== 4) return;
        if(xhr.status >= 200 && xhr.status <= 300){
            let json = JSON.parse(xhr.responseText);
            json.forEach(element =>{
                const li  = document.createElement("li");
                li.innerHTML = `${element.name}, ${element.username}, ${element.email}`;
                fragment.appendChild(li);
            });
            xhrDOM.appendChild(fragment);
        }
    })
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
    xhr.send()
})();

(()=>{
    const fetchDOM = document.getElementById('fetch');
    const fragment = document.createDocumentFragment();
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.ok? res.json():Promise.reject(res))
    .then((json ) => {
        json.forEach(element =>{
            const li  = document.createElement("li");
            li.innerHTML = `${element.name}, ${element.username}, ${element.email}`;
            fragment.appendChild(li);
        });
        fetchDOM.appendChild(fragment);
    })
    .catch((err =>{
        let message = err.statusText || "ocurrió un error";
        fetchDOM.innerHTML = `Error ${err.status}:${message}` 
    }))
    .finally(console.log("promesa ejecutada pase lo que pase"))
})();

(()=>{
    const fetchAsyncDOM = document.getElementById('fetch-async');
    const fragment = document.createDocumentFragment();

    async function getData(){
        try{
            let res = await  fetch("https://jsonplaceholder.typicode.com/users");
            let json = await res.json();
            if(!res.ok)throw {status:res.status,statusText:res.statusText}
            json.forEach(element =>{
                const li  = document.createElement("li");
                li.innerHTML = `${element.name}, ${element.username}, ${element.email}`;
                fragment.appendChild(li);
            });
            fetchAsyncDOM.appendChild(fragment);
        }
        catch(err){
            console.log(err);
            let message = err.statusText || "ocurrió un error";
            fetchAsyncDOM.innerHTML = `Error ${err.status}:${message}` 
        }
        finally{

        }
    }

    getData()
    fetch("https://jsonplaceholder.typicode.com/users")
})();

(()=>{
    const AxiosDOM = document.getElementById('axios');
    const fragment = document.createDocumentFragment();

    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res =>{//axios nos devuelve el resultado directamente parseado como objeto
        let json = res.data;
        json.forEach(element =>{
            const li  = document.createElement("li");
            li.innerHTML = `${element.name}, ${element.username}, ${element.email}`;
            fragment.appendChild(li);
        });
        AxiosDOM.appendChild(fragment);
    })
    .catch(err =>{
        console.log(err);
        let message = err.response.statusText || "ocurrió un error";
        AxiosDOM.innerHTML = `Error ${err.response.status}:${message}` 
    })
    .finally(()=>console.log("codigo que se ejecutará si o si"));
})();

(()=>{
    const axiosAsyncDOM = document.getElementById('axios-async');
    const fragment = document.createDocumentFragment();

    async function getData(){
        try{
            let res = await  axios.get("https://jsonplaceholder.typicode.com/users");
            let json = await res.data;
            json.forEach(element =>{
                const li  = document.createElement("li");
                li.innerHTML = `${element.name}, ${element.username}, ${element.email}`;
                fragment.appendChild(li);
            });
            axiosAsyncDOM.appendChild(fragment);
        }    
        catch(err){
            console.log(err)
            let message = err.response.statusText || "ocurrió un error";
            axiosAsyncDOM.innerHTML = `Error ${err.response.status}:${message}` 
        }
    }

    getData();
})();