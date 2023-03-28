let wsMyPost = {


    showpost(p1){
        console.log("dentra aal worker",p1);
        console.log(p1.btn);
        let baners ="";

        p1.forEach((val,id)=>{ 
            baners +=`<div class="col-md-6">
                <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" id="cards">
                    <div class="col p-4 d-flex flex-column position-static">
                        <strong class="d-inline-block mb-2 text-primary">${p1.article}</strong>
                        <h3 class="mb-0">${p1.title}</h3>
                        <div class="mb-1 text-muted">${p1.date}</div>
                        <p class="card-text mb-auto">${p1.paragraph}</p>
                        <a href="${p1.btn.href}" class="stretched-link">${p1.btn.name}</a>
                    </div>
                    <div class="col-auto d-none d-lg-block">
                        <img src="${p1.image}" alt="" class="responsiveimg">
                    </div>
                </div>
            </div>`
            
        });
        return baners;
    }


}

self.addEventListener("message", (e)=> {
    postMessage(wsMyPost[`${e.data.module}`](e.data.data))
})