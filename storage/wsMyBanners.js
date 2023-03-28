let wsMyBanners = {

    showImage(p1){
        
        return `<img src="${p1}"  style="background-size: cover; background-position: center;" id="imgStyle">`
        
        /* (".imgStyle").style.
        backgroundImage = `url(${p1.image})` */
    },

    showTidulos(p1){
        return ` 
        <h1 class="display-4 fst-italic">${p1.title}</h1>
        <p class="lead my-3">${p1.paragratf}</p>
        <p class="lead mb-0"><a href="${p1.href}" class="text-white fw-bold">${p1.title}</a></p>`
        
    },

}

self.addEventListener("message", (e) => {
    postMessage(wsMyBanners[`${e.data.module}`](e.data.data))
})
