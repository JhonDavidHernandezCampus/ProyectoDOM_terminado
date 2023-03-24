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
    titlelista:"Lugares con las mejores recomendaciones",
    parrafolista:"",
    listas:[
        {
            elemento:"Japón",
            parrafo:"Este país es conocido por su cultura única y fascinante, que incluye la ceremonia del té, el arte del bonsái y la moda vanguardista. Además, Japón cuenta con una hermosa naturaleza, incluyendo los cerezos en flor y las montañas nevadas en invierno."
        },
        {
            elemento:"Italia",
            parrafo:"Italia es famosa por su arte, arquitectura, historia y gastronomía. Desde los canales de Venecia hasta los restos del Imperio Romano en Roma, hay mucho que explorar en este país."
        },
        {
            elemento:"Tailandia",
            parrafo:" Este país del sudeste asiático es conocido por sus playas de ensueño, templos dorados y deliciosa comida callejera. Tailandia también cuenta con una vibrante cultura y una hospitalidad cálida y amigable."

        },
        {
            elemento:"Australia",
            parrafo:"Desde las playas doradas hasta la Gran Barrera de Coral y los parques naturales llenos de vida silvestre, Australia ofrece una variedad de paisajes impresionantes para explorar. También es el hogar de ciudades vibrantes como Sydney y Melbourne."
            
        },
        {
            elemento:"España",
            parrafo:"España es conocida por su arquitectura impresionante, incluyendo la obra maestra de Gaudí, la Sagrada Familia, y sus hermosas playas. Además, la gastronomía española es mundialmente famosa por su deliciosa variedad de tapas y vinos."
            
        },
        {
            elemento:"Islandia",
            parrafo:"Este país es un paraíso natural con cascadas, géiseres, glaciares y auroras boreales. También es el hogar de baños termales naturales, como la famosa Laguna Azul."
            
        },
        {
            elemento:"Estados Unidos ",
            parrafo:"Desde la animada ciudad de Nueva York hasta las playas de California, los parques nacionales de Utah y el Gran Cañón en Arizona, Estados Unidos cuenta con una amplia variedad de destinos turísticos."
            
        },
        {
            elemento:"Perú",
            parrafo:" Con su impresionante paisaje de montañas andinas, ruinas históricas como Machu Picchu y una rica cultura indígena, Perú ofrece una experiencia turística única y enriquecedora."
            
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

    listaRecomendados(){
        /* esta parte me muestra las listas de los lugares recomandados a visitar */
        console.log(this.title);
        document.querySelector("article").insertAdjacentHTML("beforeend",`
            <h3>${this.titlelista}</h3>
            <p>${this.parrafolista}</p>
            <ol>
            ${this.listas.map((val,id)=>
                `<a href="" class="btn " style="text-decoration:none;"><li>${val.elemento}</li></a>
                <p>${val.parrafo}</p>`).join("")
                    
            }
            </ol>
                
            `);     
    },




        
    tituloTable:"Informacion de los paises visitados",
    parrafotable:"La siguienta tabla nos enseñara informacion sobre la cantidad de perosnas que han viajado a los diferentes paises, la cantidad y su calificacion promedio del 1 al 10",

    pais:"Pais",
    canViajes:"Cantidad de Personas que Viajaron",
    promCalificaciones:"Calificacion promedio para este Pais",

    datos:[
        {
            nombre:"Japon",
            natidad:"12345",
            calificacion:"8.4"
        },
        {
            nombre:"Italia",
            natidad:"49321",
            calificacion:"9.8"
        },
        {
            nombre:"Tailandia",
            natidad:"3576",
            calificacion:"9.1"
        },
        {
            nombre:"Australia",
            natidad:"7277",
            calificacion:"6.3"
        },
        {
            nombre:"España",
            natidad:"15768",
            calificacion:"9.6"
        },
        {
            nombre:"Islandia",
            natidad:"1267",
            calificacion:"9.3"
        },
        {
            nombre:"USA",
            natidad:"30234",
            calificacion:"8.9"
        },
        {
            nombre:"Peru",
            natidad:"5557",
            calificacion:"7.9"
        },

    ],


    tablaRecomandados(){
        document.querySelector("article").insertAdjacentHTML("beforeend",`
        <h3>${this.tituloTable}</h3>
        <p>${this.parrafotable}</p>

        `)

        console.log(this.pais);
        document.querySelector(".table").insertAdjacentHTML("beforeend",`
        <thead>  
            <tr>
                <th class="text-center">${this.pais}</th>
                <th class="text-center">${this.canViajes}</th>
                <th class="text-center">${this.promCalificaciones}</th>
            </tr>
        </thead>
        <tbody >
            ${this.datos.map((val,id)=>
            `<tr>
                <td class="text-center">${val.nombre}</td>
                <td class="text-center">${val.natidad}</td>
                <td class="text-center">${val.calificacion}</td>
            </tr>`).join("")}
            
        </tbody>
        
        `)
    },

    titulofin:"¿Estas preparado para tu viaje?",
    parrafo1:"claro",
    parrafo2:"que paso?",
    parrafo3:"yes",




    finalizacion(){
    document.querySelector("#final").insertAdjacentHTML("beforeend",`
    <h2 class="blog-post-title">${this.titulofin}</h2>
    <p class="blog-post-meta"><a href="#">${this.parrafo1}</a></p>
    <p>${this.parrafo2}</p>
    <p>${this.parrafo3}</p>
    
    `)

    }


}



