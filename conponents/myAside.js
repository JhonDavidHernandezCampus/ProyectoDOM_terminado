import config from "../storage/config.js";


export default{
    
    show(){

        config.dataMyAside();
        Object.assign(this, JSON.parse(localStorage.getItem("myAside")));

        let count=1;
        const ws = new Worker("storage/wsMyAside.js",{type :"module"});

        ws.postMessage({module:"cards", data: this.nav});
        ws.postMessage({module:"list", data: this.nav[1]});


        
        ws.addEventListener("message", (e)=> {
            let doc = new DOMParser().parseFromString(e.data,"text/html");

            document.querySelector("#nav").append(...doc.body.children);
            
            (this.nav.length-1==count)?ws.terminate():count++;
    
        })
    }


/* 
    showAside(){
        const data = this.nav.map((val,id)=> {
            return(
            (val.link)
                ?this.list(val)
                :this.cards(val)
            )
        })
        document.querySelector("#nav").insertAdjacentHTML("beforeend", data.join(""));
    },

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

    }, */

}