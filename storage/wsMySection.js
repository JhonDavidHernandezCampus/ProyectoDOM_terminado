let wsMySection ={

    showtitulo(p1){
        return`
        <h3 class="pb-4 mb-4 fst-italic border-bottom">
                ${p1}
        </h3>` 
    },

    showcontrenido(p1){
        let seccio = "";
        p1.forEach((val,id)=> {

            seccio+=`<h2 class="blog-post-title">${val.title}</h2>
            <p class="blog-post-meta">${val.fecha}<a href="${val.href}">${val.nombre}</a></p>
            <p>${val.paragraght1}</p>
            <hr>
            <p>${val.paragraght2}</p>`
        });
        return seccio;
    },

    listaRecomendados(p1){
        /* esta parte me muestra las listas de los lugares recomandados a visitar */
        return `
            <h3>${p1.titlelista}</h3>
            <p>${p1.parrafolista}</p>
            <ol>
            ${p1.listas.map((val,id)=>
                `<a href="" class="btn " style="text-decoration:none;"><li>${val.elemento}</li></a>
                <p>${val.parrafo}</p>`).join("")
                    
            }
            </ol>
            
            <h3>${p1.tituloTable}</h3>
            <p>${p1.parrafotable}</p>
            `     
    },

    tablaRecomandados(p1){
        return `
        <table class="table" id="latabla">
            <thead>  
                <tr>
                    <th class="text-center">${p1.pais}</th>
                    <th class="text-center">${p1.canViajes}</th>
                    <th class="text-center">${p1.promCalificaciones}</th>
                </tr>
            </thead>
            <tbody >
                ${p1.datos.map((val,id)=>
                `<tr>
                    <td class="text-center">${val.nombre}</td>
                    <td class="text-center">${val.natidad}</td>
                    <td class="text-center">${val.calificacion}</td>
                </tr>`).join("")}
                
            </tbody>
        </table>
        `
    },
    finalizacion(p1){
        return `
        <h2 class="blog-post-title">${p1.titulofin}</h2>
        <p class="blog-post-meta"><a href="${p1.href1}" target="_blank">${p1.parrafo1}</a></p>
        <p>${p1.parrafo2}</p>
        <p>${p1.parrafo3}</p>
        `}

}

self.addEventListener("message", (e)=> {
    postMessage(wsMySection[`${e.data.module}`](e.data.data))
})