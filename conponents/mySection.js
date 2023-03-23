export default{
    title:"¿Porque viajar con nosotros?",

    

    showtitulo(){
        console.log(this.title);
        document.querySelector("#seccion").insertAdjacentHTML("afterbegin",
        `<h3 class="pb-4 mb-4 fst-italic border-bottom">
                ${this.title}
        </h3>` )
    },

















}


