import config from "../storage/config.js";

export default{

    show(){
    /* llamamos los datos ques encuentran en config */
    config.dataMyPost();
    Object.assign(this,JSON.parse(localStorage.getItem("myPost")))


        let count=0;
        const ws = new Worker("storage/wsMyPost.js",{type:"module"});

        this.post.forEach((val,id)=>{
                ws.postMessage({module:"showpost", data:this.post[id],data2: this.post[id].btn})
        });


        ws.addEventListener("message", (e)  =>{
            let doc = new DOMParser().parseFromString(e.data,"text/html");
            document.querySelector("#contPost").append(...doc.body.children);

            (this.post.length-1==count)?ws.terminate():count++;
            
        
        })

        /* this.post.forEach((val,id)=>{
            document.querySelector("#contPost").insertAdjacentHTML("beforeend", `
            <div class="col-md-6">
                <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" id="cards">
                    <div class="col p-4 d-flex flex-column position-static">
                        <strong class="d-inline-block mb-2 text-primary">${val.article}</strong>
                        <h3 class="mb-0">${val.title}</h3>
                        <div class="mb-1 text-muted">${val.date}</div>
                        <p class="card-text mb-auto">${val.paragraph}</p>
                        <a href="${val.btn.href}" class="stretched-link">${val.btn.name}</a>
                    </div>
                    <div class="col-auto d-none d-lg-block">
                        <img src="${val.image}" alt="" class="responsiveimg">
                    </div>
                </div>
            </div>`
            );
        });  */
    }

}