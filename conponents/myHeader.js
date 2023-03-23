
export default{
    title:{
        name: "Investiga para viajar como en tus sueños",
        href: "#"
    },

    viajes : [
        { 
        name:"Jamaica",
        href:"#"    
        },
        { 
        name:"Viajes y turismo",
        href:"#"    
        },
        { 
        name:"Historia",
        href:"#"    
        },
        { 
        name:"Véase también",
        href:"#"    
        },
        { 
        name:"Referencias",
        href:"#"    
        },
        { 
        name:"Bibliografía",
        href:"#"    
        },
        
    ],
    
    listTitle(){
        document.querySelector("#title").insertAdjacentHTML("beforeend",`
        <a class="blog-header-logo text-dark" href="${this.title.href}">${this.title.name}</a>
        `)
    },

    listViajes(){
        let plantilla = "";
        this.viajes.forEach((val,id) => {
        plantilla += `<a class="p-2 link-secondary" href="${val.href}">${val.name}</a>`
        });
        document.querySelector("#viajes").insertAdjacentHTML("beforeend", plantilla)

    }


}