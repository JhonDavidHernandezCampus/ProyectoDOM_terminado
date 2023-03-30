import config from "../storage/config.js";

export default{



    /* la data ya esta toda en el archivo config.js en la funcion dataMySection() */






    show(){
    //traemos la data de config que esta en la ,inea 1
    
        config.dataMySection();
        Object.assign(this, JSON.parse(localStorage.getItem("mySection")));


        /* creacion del worker*/
        const ws = new Worker("storage/wsMySection.js", {type: "module"});

        let id=[];
        let count = 0;


        ws.postMessage({module: "showtitulo" ,data:this.title});
        ws.postMessage({module: "showcontrenido",data:this.bloques});
        ws.postMessage({module: "listaRecomendados", data: this.tatos});
        ws.postMessage({module: "tablaRecomandados", data:this.encatabla});
        ws.postMessage({module: "finalizacion", data: this.final})

        


        ws.addEventListener("message",(e)=>{
            let doc = new DOMParser().parseFromString(e.data , "text/html");

            document.querySelector("#article").append(...doc.body.children);
            document.querySelector("#seccion").prepend(...doc.body.children);
            document.querySelector("#final").prepend(...doc.body.children);

            (count==4)?ws.terminate():count++ 


        })

    },

/* 
    showtitulo(){
        document.querySelector("#seccion").insertAdjacentHTML("afterbegin",
        `<h3 class="pb-4 mb-4 fst-italic border-bottom">
                ${this.title}
        </h3>` )
    },
*/

/*

    showcontrenido(){
        let seccio = "";
        this.bloques.forEach((val,id)=> {
            
            seccio+=`<h2 class="blog-post-title">${val.title}</h2>
            <p class="blog-post-meta">${val.fecha}<a href="${val.href}">${val.nombre}</a></p>
            <p>${val.paragraght1}</p>
            <hr>
            <p>${val.paragraght2}</p>`
        });
        document.querySelector("article").insertAdjacentHTML("afterbegin",seccio);
    },
    listaRecomendados(){
        /* esta parte me muestra las listas de los lugares recomandados a visitar 
        document.querySelector("article").insertAdjacentHTML("beforeend",`
            <h3>${this.titlelista}</h3>
            <p>${this.parrafolista}</p>
            <ol>
            ${this.listas.map((val,id)=>
                `<a href="" class="btn " style="text-decoration:none;"><li>${val.elemento}</li></a>
                <p>${val.parrafo}</p>`).join("")
                    
            }
            </ol>
                
            `);     
    },
    tablaRecomandados(){
        document.querySelector("article").insertAdjacentHTML("beforeend",`
        <h3>${this.tituloTable}</h3>
        <p>${this.parrafotable}</p>
        `)
        document.querySelector(".table").insertAdjacentHTML("beforeend",`
        <thead>  
            <tr>
                <th class="text-center">${this.pais}</th>
                <th class="text-center">${this.canViajes}</th>
                <th class="text-center">${this.promCalificaciones}</th>
            </tr>
        </thead>
        <tbody >
            ${this.datos.map((val,id)=>
            `<tr>
                <td class="text-center">${val.nombre}</td>
                <td class="text-center">${val.natidad}</td>
                <td class="text-center">${val.calificacion}</td>
            </tr>`).join("")}
            
        </tbody>
        
        `)
    },

    finalizacion(){
    document.querySelector("#final").insertAdjacentHTML("beforeend",`
    <h2 class="blog-post-title">${this.titulofin}</h2>
    <p class="blog-post-meta"><a href="${this.href1}" target="_blank">${this.parrafo1}</a></p>
    <p>${this.parrafo2}</p>
    <p>${this.parrafo3}</p>
    `)}*/
}



