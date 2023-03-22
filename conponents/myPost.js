export default{
    post:[
        {
            article:"El mejor lugar para la familia",
            title:"París",
            date:"Un auténtico oasis infantil",
            paragraph:"Después de las visitas de rigor a la Torre Eiffel y la Catedral de Notre Dame, donde la diversión está 100% garantizada.",
            image:"img/Disneyland-Paris-e1436004301474.jpg.webp",
            btn:{
                name:"Saber Acerca de este viaje",
                href :"https://www.booking.com/city/fr/paris.es.html?aid=837601"
            }
        },
        {
            article:"El arte de Observar",
            title:"Orlando",
            date:"Conquistara a los más pequeños",
            paragraph:"Es un espacio donde los pequeños podrán encontrar diferentes islas que recrean desde el mundo de Parque Jurásico hasta de Harry Potter.",
            image:"img/Vacaciones-con-los-niños-en-Orlando-Universal-Studios-e1460626742295.jpg.webp",
            btn:{
                name:"Saber Acerca de este viaje",
                href :"#"
            }
        },
        {
            article:"Paz y tranquilidad",
            title:"Tenerife",
            date:"Esta isla es un paraíso ",
            paragraph:"sus playas, podéis planificar una excursión al Teide, la montaña más alta de España, accesible para los niños a través del teleférico.",
            image:"img/Siam-Park-con-niños-e1440324499631.jpg.webp",
            btn:{
                name:"Saber Acerca de este viaje",
                href :"#"
            }
        },
        {
            article:"Adrenalina y divercion",
            title:"Nueva York",
            date:"Precios y demas",
            paragraph:"Se trata de una ciudad caótica. De eso no hay dudas. Pero, también es uno de los destinos preferidos para viajar con niños ya que alberga zoológicos",
            image:"img/Vacaciones-con-los-niños-en-Nueva-York-e1460624776221.jpg.webp",
            btn:{
                name:"Saber Acerca de este viaje",
                href :"https://www.booking.com/city/us/new-york.es.html?aid=837601"
            }
        },
        {
            article:"Naturaleza y conocimiento",
            title:"Roma",
            date:"capital con muchos destinos",
            paragraph:"Podéis pasar un día en Villa Borghese, un gran parque verde que atesora un pequeño lago artificial que se puede recorrer en bote.",
            image:"img/Parque-de-Villa-Borghese-en-Roma-e1446824727593.jpg.webp",
            btn:{
                name:"Saber Acerca de este viaje",
                href :"#"
            }
        }
    
    ],

 
    showpost(){
        this.post.forEach((val,id)=>{
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
        });
    }

}