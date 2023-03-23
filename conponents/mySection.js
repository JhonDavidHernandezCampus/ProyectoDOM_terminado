export default{
    title:"¿Porque viajar con nosotros?",
    bloques:[
        {
            title:"la mejor ",
            fecha:"January 1, 2021 by ",
            paragraght1:"SOIIUIUU",
            paragraght2:"SIUUUUUUU",
        },

    ],
    

    showtitulo(){
        document.querySelector("#seccion").insertAdjacentHTML("afterbegin",
        `<h3 class="pb-4 mb-4 fst-italic border-bottom">
                ${this.title}
        </h3>` )
    },

    showcontrenido(){
        let seccio = "";
        this.bloques.forEach((val,id)=> {
            
            seccio+=`<h2 class="blog-post-title">${val.title}</h2>
          <p class="blog-post-meta">${val.fecha}<a href="#">Mark</a></p>

          <p>${val.paragraght1}</p>
          <hr>
          <p>${val.paragraght2}</p>`
        });
        document.querySelector("article").insertAdjacentHTML("afterbegin",seccio);
    
    
    }




}


