import React from "react";
//import vino1 from "../assets/images/vino1.jpg"


function Home(){
    return(
        <div >
            <section className="cuerpo">
              <div className="Home"> 
                  <h1 className="tituloHome">ADMINISTRADOR</h1>
              </div>
              <div className="paneles">
                <div className="panel">Total productos</div>
                <div className="panel">Total categorías</div>
                <div className="panel">Total usuarios</div>
              </div>
              
                 <div className="containerHome">
                 <a className="tituloHome2" href="http://localhost:3100/">
                    <div className="boxHome"> </div>  
                    </a>
                
                </div>
               
            </section>
              
            
            </div>
    )
}

export default Home;