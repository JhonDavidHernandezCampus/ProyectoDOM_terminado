let wsMrAside = {
    cards(par1){
        return `
        <div class="p-4 mb-3 bg-light rounded">
            <h4 class="fst-italic">${par1.title}</h4>
            <p class="mb-0">${par1.paragrangh}</p>
        </div>`;
    },
    list(par1){
        return  `
        <div class="p-4">
        <h4 class="fst-italic">${par1.title}</h4>
            <ol class="list-unstyled mb-0">
                ${par1.link.map((val,id)=> `<li><a href="${val.href}" style="text-decoration: none;">${val.name} </a></li>`).join("<br>")}
            </ol>
        </div>`; 

    },

}
self.addEventListener("message",(e)=>{
    wsMrAside[`${e.data.module}`] (e.data)})