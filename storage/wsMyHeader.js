export let wsMyHeader = {
    
    listTitle(){
        return`<a class="blog-header-logo text-dark text-decoration-none " href="${this.title.href}">${this.title.name}</a>
        `;
    },

    listViajes(p1){
        let plantilla = "";
        p1.forEach((val,id) => {
        plantilla += `<a class="p-2 ) text-decoration-none " href="${val.href}">${val.name}</a>`
        });
        return plantilla;
        /* document.querySelector("#viajes").insertAdjacentHTML("beforeend", plantilla) */
    },
    
}
self.addEventListener("message",(e)=>{
    postMessage(wsMyHeader[`${e.data.module}`](e.data.data) )

})