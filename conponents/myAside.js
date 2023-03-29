

export default{
    nav :[
        {
        title:"Cositas a saber antes de viajar",
        paragrangh:`No podemos negar que para muchos, ver un billete de avión y empezar a viajar es prácticamente lo mismo. A nosotros nos pasa, así que sabemos qué significa esa sensación. Aunque debemos ser prudentes y dedicar un tiempo a algunos factores que nos harán mejorar y mucho, nuestros días de vacaciones. Os dejamos una 
        selección de 10 cosas que debemos tener en cuenta antes de hacer un viaje.`,
        },
        {
            title:"Ten encuenta:",
            paragrangh:"",
            link:[
                {
                    name:"1- Documentación en regla",
                    href: "https://www.viajeroscallejeros.com/10-cosas-debemos-cuenta-viaje/",
                },
                {
                    name:"2- Tarjeta Sanitaria Europea",
                    href: "https://www.viajeroscallejeros.com/10-cosas-debemos-cuenta-viaje/",
                },
                {
                    name:"3- Acudir a tu Centro de Vacunación",
                    href: "https://www.viajeroscallejeros.com/10-cosas-debemos-cuenta-viaje/",
                },
                {
                    name:"4- Seguro de viaje",
                    href: "https://www.viajeroscallejeros.com/10-cosas-debemos-cuenta-viaje/",
                },
                {
                    name:"5- Infórmate del destino al que viajas.",
                    href: "https://www.viajeroscallejeros.com/10-cosas-debemos-cuenta-viaje/",
                },
                {
                    name:"6- Apúntate a las tarifas de conexión locales",
                    href: "https://www.viajeroscallejeros.com/10-cosas-debemos-cuenta-viaje/",
                },
                {
                    name:"7- Mira el tiempo en el destino",
                    href: "https://www.viajeroscallejeros.com/10-cosas-debemos-cuenta-viaje/",
                },
            ],
        },
        {
            title:"Dato Curioso",
            paragrangh:"Viajar es una experiencia enriquecedora que puede proporcionar una amplia gama de beneficios para la salud mental y emocional, así como para el crecimiento personal.",
        },
    ],
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
    show(){
        let count=0;
        const ws = new Worker("storage/wsMyAside.js",{type :"module"});

        ws.postMessage({module:"cards", data: this.nav});
        ws.postMessage({module:"list", data: this.nav[1]});


        
        ws.addEventListener("message", (e)=> {
            let doc = new DOMParser().parseFromString(e.data,"text/html");

            document.querySelector("#nav").append(...doc.body.children);
            
            (this.nav.length-1==count)?ws.terminate():count++;
    
        })
    }

}