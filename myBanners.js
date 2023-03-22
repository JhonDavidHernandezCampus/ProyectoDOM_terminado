export default{

    title:"Tus vacaciones soñadas",
    paragratf:"Cada viaje de Rutopía es un perfecto balance entre los intereses de quienes viajan y sus necesidades y los lugares que visitan Comienza a diseñar tu viaje personalizado llenando este formulario",

    btn : {
        title:"Mostar mas",
        href:"#"
    },




    image:"../img/viaje.webp",
    showImage(){
        document.querySelector(".imgStyle").style.
        backgroundImage = `url(${this.image})`
    },

    showTidulos(){
        document.querySelector("#showSection").insertAdjacentHTML(
        "beforeend" , ` 
        <h1 class="display-4 fst-italic">${this.title}</h1>

        <p class="lead my-3">${this.paragratf}</p>

        <p class="lead mb-0"><a href="${this.btn.href}" class="text-white fw-bold">${this.btn.title}</a></p>
       `
        )
    }


}