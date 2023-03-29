let wsMyAside = {
/*     showAside(par1){
        const data = par1.map((val,id)=> {
            return(
            (par1.link)
                ?this.list(val)
                :this.cards(val)
            )
            
        })
        return data;
    },

    cards(par1){
        return `
        <div class="p-4 mb-3 bg-light rounded">
            <h4 class="fst-italic">${par1.title}</h4>
            <p class="mb-0">${par1.paragrangh}</p>
        </div>`;
    },
    list(par1){
        let content = ''
        for(let x in par1.link){
            content += `<li><a href="${par1.link[x].href}" style="text-decoration: none;">${par1.link[x].name} </a></li>`
        }
        let car="";
        car += `
        <div class="p-4">
        <h4 class="fst-italic">${par1.title}</h4>
            <ol class="list-unstyled mb-0">
                ${content}
            </ol>
        </div>`; 
        return car
    }, */

    cards(par1){
        let dat ="";
        for (let x in par1){
            dat+=`<div class="p-4 mb-3 bg-light rounded">
                <h4 class="fst-italic">${par1[x].title}</h4>
                <p class="mb-0">${par1[x].paragrangh}</p>
            </div>`
        }
        return dat;
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
    postMessage(wsMyAside[`${e.data.module}`](e.data.data))
})