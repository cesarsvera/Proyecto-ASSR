import logo from './logo.svg';
import './anomalia.css';
import logo2 from './logo.png';
import logo3 from './Capture.PNG'
import cap1 from './Capture_showip.PNG'
import cap2 from './Capture_show bgp.PNG'
import cap3 from './Capture_showsum.PNG'


function anomalia(){  
  return (
        <div className="anomalia">
            <header className="anomalia-header">
            


                <div className = " row ">

                    <div className = "  col d-flex justify-content-start ">

                        <img src= {logo2} style = {{width:200, height: 80}}></img>

                    </div>

                    <div className = "col d-flex justify-content-end ">
                        <div className = "  me-4 mt-3 cont">
                            <a className = "btn btn-secondary">
                            contactos
                            </a>
                        </div>

                        <div className = " me-4 mt-3  ini " >
                            <a className = "btn btn-secondary" href = "http://localhost:3000">
                            inicio 
                            </a>
                        </div>


                    </div>

                    

                </div>


            </header>


            <div className = "mt-5">

                <div className = "row">

                    <div className = "col">

                        <img className = "img-thumbnail" src = {logo3} style = {{width:450, height: 350}}></img>


                    </div>

                    <div className = "col prin me-5 ">

                        <h1 className="titu w-75 text-center">
                            Topologia Clos
                        </h1>


                        <p className = "cuerp text-justify w-75">
                            Para el siguiente analisis de anomalias de un router con protoloco BGP
                            se relizara en una topologia clos, en donde se mostrara. Una red Clos es 
                            una especie de red de conmutación de circuitos multietapa que representa 
                            una idealización teórica de sistemas de conmutación prácticos y multietapa.

                        </p>

                    </div>



                </div>



                <div className = "titCom mt-3 me-3">
                    <h1 >
                        Comandos para el analisis de anomalias

                    </h1>


                </div>









                <div className = "row d-flex justify-content-center">

                <div class="card col cart1 me-3">
                        
                        <img className = "card-img-top " src={cap1} style = {{width:450, height: 350}} ></img>
                        <div class="card-body">
                            <p class="card-text">
                                Se realizara una muestra de los comandos como show ip router donde 
                                se mostrara la tabla de enrutamiento que guarda el router.En ella 
                                podemos observar las ruta conectadas directamente, rutas dinamicas 
                                y rutas estaticas
                                
                            </p>
                        </div>

                    </div>                




                    <div class="card col cart1 me-3" >
                        
                        <img className = "card-img-top" src={cap2} style = {{width:450, height: 350}}></img>
                        <div class="card-body">
                            <p class="card-text">
                            Mostraremos la tabla de enrutamiento bgp en donde estaran todas
                            las redes de las interfaces en donde estara habilidad el comando bgp.
                            Esto nos demostrara si alguna interfaz no estaria habilitado el protocolo bgp,
                            presentando asi una anomalia en uno de los routes.                                
                            </p>
                        </div>

                    </div>


                    <div class="card col cart1 me-3" >
                        
                        <img className = "card-img-top" src={cap3} style = {{width:450, height: 350}}></img>
                        <div class="card-body">
                            <p class="card-text">
                                Con este comando podemos verificar lel estado de todos los vecinos 
                                que se encuentran conectados, nos dara la direccion ip de la interfaz,
                                la actividad, quiere decir si se encuentra actualmente activo. Con este
                                comando se verificara tambien ocurrio alguna anomalia de desconeccion del
                                protocolo BGP.                                
                            </p>
                        </div>

                    </div>






                </div>




                <div className = "boton mt-3">

                    <a className ="btn btn-primary btn-lg" href = ""> Comenzar </a>

                </div>




                

            </div>



        </div>
    );
}

export default anomalia;