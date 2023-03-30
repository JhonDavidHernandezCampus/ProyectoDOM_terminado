import config from "../storage/config.js"

export default{


    Show(){
        config.dataMyBanners();
        Object.assign(this, JSON.parse(localStorage.getItem("myBanners")))

        const ws = new Worker("storage/wsMyBanners.js",{type:"module"});
        let id =[];
        let count = 0;

        ws.postMessage({module:"showImage", data: this.image});
        ws.postMessage({module:"showTidulos", data: this.datos});

        id=["#imgStyle","#showSection"];

        //lo que se resive del worker
        ws.addEventListener("message", (e)=>{
            //parseamos lo que trae el evento o mensaje 
            let doc = new DOMParser().parseFromString(e.data,"text/html");
            //insertamos en nuestro index los selectores por medio del array
            document.querySelector(id[count]).append(...doc.body.children);
            (id.length-1==count)?ws.terminate():count++;

        })
    }
    /*
    showImage(){
        document.querySelector(".imgStyle").style.
        backgroundImage = `url(${this.image})`
    },  showTidulos(){
        document.querySelector("#showSection").insertAdjacentHTML(
        "beforeend" , ` 
        <h1 class="display-4 fst-italic">${this.title}</h1>

        <p class="lead my-3">${this.paragratf}</p>

        <p class="lead mb-0"><a href="${this.btn.href}" class="text-white fw-bold">${this.btn.title}</a></p>`
        )
    }, */



}