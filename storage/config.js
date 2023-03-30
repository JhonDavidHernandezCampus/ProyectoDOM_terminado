
export default{
    dataMyHeader(){
        localStorage.setItem("myHeader", JSON.stringify({

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
        
        }))
    },

    dataMySection(){
        localStorage.setItem("mySection", JSON.stringify ({

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
            
            tatos:{
        
                titlelista:"Lugares con las mejores recomendaciones",
                parrafolista:"",
                tituloTable:"Informacion de los paises visitados",
                parrafotable:"La siguienta tabla nos enseñara informacion sobre la cantidad de perosnas que han viajado a los diferentes paises, la cantidad y su calificacion promedio del 1 al 10",
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
            },
        
            encatabla:{
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
            },
        
            
            
            /* me muestra el ultimo parrafo de la seccion  */
            final:{
                titulofin:"¿Estas preparado para tu viaje?",
                parrafo1:"Muesrame mas",
                href1:"https://www.viajesfalabella.com.co/paquetes/?gclid=Cj0KCQjwlPWgBhDHARIsAH2xdNclCYpr7hJ6NhWRe66wCzipF_KQwjHV07wV0KNCpioS6vB8WLz7H9kaAlc3EALw_wcB&mktdata=key%3DJU2BGE0FV1UKMCGIUTAEK8NSA8%26c%3D10585631892%26accountid%3D3627749274%26pr%3DX%26cc%3DCO%26n%3Dg%26d%3Dc%26campaignid%3D10585631892%26adgroupid%3D104961163592%26kw%3D%26adid%3D449625867061%26targetid%3Ddsa-929133462635%26locationid%3D1029315%26gclid%3DCj0KCQjwlPWgBhDHARIsAH2xdNclCYpr7hJ6NhWRe66wCzipF_KQwjHV07wV0KNCpioS6vB8WLz7H9kaAlc3EALw_wcB%26id%3D20230324123805130105408612005222%26trackeame_user_id%3D128F5A984DB7167933442904505b18fbf-0f79-47b1-9fd4-67712cb729415487107",
                parrafo2:"En conclusión, esperamos que esta página de viajes te haya sido útil y entretenida. En ella, hemos intentado brindarte información detallada y valiosa sobre distintos destinos alrededor del mundo, así como consejos y recomendaciones para que puedas disfrutar al máximo de tus aventuras. Sabemos que cada viaje es una experiencia única e inolvidable, y esperamos haberte ayudado a planificar tus próximas aventuras de manera más fácil y efectiva. No dudes en compartir tus comentarios y sugerencias con nosotros, y ¡que tengas un excelente viaje!",
                parrafo3:"Además, en esta página de viajes, también podrás encontrar información sobre diferentes formas de viajar, desde el turismo tradicional hasta el ecoturismo y el turismo sostenible. Creemos que viajar no solo es una forma de explorar el mundo, sino también de aprender y contribuir al cuidado del planeta. Por eso, hemos compartido consejos y recomendaciones para viajar de manera responsable y respetuosa con el medio ambiente y las comunidades locales. Esperamos que nuestra página te inspire a viajar de forma consciente y a hacer una diferencia positiva en el mundo. ¡Que disfrutes tu viaje!",
            },
        
        }))
    },
    dataMyPost(){
        localStorage.setItem("myPost",JSON.stringify({
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
        
        }))
    },
    dataMyBanners(){
        localStorage.setItem("myBanners", JSON.stringify({
        datos : {
            title:"Tus vacaciones soñadas",
            paragratf:"Cada viaje de Rutopía es un perfecto balance entre los intereses de quienes viajan y sus necesidades y los lugares que visitan Comienza a diseñar tu viaje personalizado llenando este formulario",
            title:"Mostar mas",
            href:"#"
        },

        image:"",
        }))
    },
    dataMyAside(){
        localStorage.setItem("myAside", JSON.stringify({
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
        }))
    }


}