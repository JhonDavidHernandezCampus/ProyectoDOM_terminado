export default{
    title:"¿Porque viajar con nosotros?",
    bloques:[
        {
            title:"Segura y canfiable a un precio maravilloso",
            fecha:"Mas sobre nosotros ",
            paragraght1:"Nosotros contamos con disponidilidad de una amplia variedad de servicios para cumplir sus deseos relacionados con las vacaciones. Debido a la multitud de ofertas que disponemos, damos mucha importancia al cliente ya que solo con una buena calidad es posible asegurar la satisfacción de los usuarios. Los requerimientos e intereses de quien contrata nuestros productos son muy importantes para nosotros y es nuestra prioridad, porque solo así es posible convertir sus vacaciones en la experiencia inolvidable que usted desea.",
            paragraght2:"Para que sus desplazamientos se conviertan en una memoria única e inolvidable y para que siempre recuerde esto como buenos momentos, ponemos a su plena disposición nuestros empleados, que les ayudará con mucho gusto, para crear su paquete perfecto. N",
            href:"https://www.viajes.com/",
            nombre:"Viajes.com",
        },

        {
            title:"Mi viaje fácil y sencillo",
            fecha:"Mas en informacion en ",
            paragraght1:`¿Quiere organizar su propio viaje por internet? ¡No hay problema! Con nuestros profesionales instrumentos le resultará fácil realizar las reservas de forma online. Tanto vuelos y hoteles como paquetes más completos en combinación con transportes o actividades – todo es posible y nada complicado. También puede contratar de forma sencilla y cómoda una amplia variedad de ocio en el lugar de destino. Pruébelo usted mismo.`,
            paragraght2:"Damos mucha importancia a la protección de datos y la confianza que pone en nosotros. Por esta razón, trabajamos con empresas verificadas y especializadas en este sector e implantamos métodos y técnicas actuales para que sus datos puedan guardarse y gestionarse con seguridad.",
            href:"https://www.viajes.com/",
            nombre:"Viajes.com",
        },
    ],
    titlelista:"este titulo",
    parrafolista:"carreta",
    listas:[
        {
            elemento:"1",
        },
        {
            elemento:"2",
        },
        {
            elemento:"3",
        },
        {
            elemento:"4",
        },
        {
            elemento:"6",
        },
        {
            elemento:"7",
        },
    ],
    

    showtitulo(){
        document.querySelector("#seccion").insertAdjacentHTML("afterbegin",
        `<h3 class="pb-4 mb-4 fst-italic border-bottom">
                ${this.title}
        </h3>` )
    },

    showcontrenido(){
        let seccio = "";
        this.bloques.forEach((val,id)=> {
            
            seccio+=`<h2 class="blog-post-title">${val.title}</h2>
            <p class="blog-post-meta">${val.fecha}<a href="${val.href}">${val.nombre}</a></p>
            <p>${val.paragraght1}</p>
            <hr>
            <p>${val.paragraght2}</p>`
        });
        document.querySelector("article").insertAdjacentHTML("afterbegin",seccio);
    },

    showLista(){
        console.log(this.title);
        document.querySelector("article").insertAdjacentHTML("beforeend",`
        <h3>${this.titlelista}</h3>
        <p>${this.parrafolista}</p>
        <ul>
        ${this.listas.map((val,id)=>
            `<li>${val.elemento}</li>`).join("<hr>")
        }
        </ul>
        
        `);

    }



}


