
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
    }

}