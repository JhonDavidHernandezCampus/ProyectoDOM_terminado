    /* aqui estamos iportando la data para el header desde el 
    archivo config*/
import config from "../storage/config.js";

export default{
    

/* esto ya lo pasamos a wsMyHeader */

/*    
    listTitle(){
        document.querySelector("#title").insertAdjacentHTML("beforeend",`
        <a class="blog-header-logo text-dark text-decoration-none " href="${this.title.href}">${this.title.name}</a>
        `)
    },
    listViajes(){ 
        let plantilla = "";
        this.viajes.forEach((val,id) => {
        plantilla += `<a class="p-2 ) text-decoration-none " href="${val.href}">${val.name}</a>`
        });
        document.querySelector("#viajes").insertAdjacentHTML("beforeend", plantilla)
    }, */

    /* esto ya es de otra clase en la que apremdimos DOMparser */

    fragShow(){
        /* traemos la data que se encuentra en confog en el la funcion
        dataMyHeader */ 


        config.dataMyHeader();
        Object.assign(this, JSON.parse(localStorage.getItem("myHeader")));

        /* creamos el worker */
        
        const ws = new Worker("storage/wsMyHeader.js",{type: "module"});
        let id=[];
        let count = 0;
        //enviamos los mensajes el worker
        //enviamosdos mensajes por que son dos funciones, se deben enviar en orden segun como esten en el worker 
        //Y en la lista creada abajo
        ws.postMessage({module: "listTitle", data: this.title})
        ws.postMessage({module: "listViajes", data: this.viajes})
        id = ["#title","#viajes"];  
        
        //Esto es lo que resivimos del worker
        ws.addEventListener("message",(e) => {
            
            //Parseamos lo que trae el evento(mensaje)
            let doc = new DOMParser().parseFromString(e.data, "text/html");

            //insertamos en nuestro index los selectores por medio del array 
            document.querySelector(id[count]).append(...doc.body.children);
            (id.length-1==count)?ws.terminate():count++;
            
            
        })

    /*  let doc = new DOMParser().parseFromString("<h1>Hola Mundo</h1>", "text/html");
        console.log(doc.querySelector("h1")); */
    }


}

