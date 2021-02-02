import logo from './logo.svg';
import './pginicio.css';
import logo2 from './logo.png';

function pginicio(props) {
  return (
    <div className="pginicio">
        <header className="pginicio-header">
      


        <div className = " row ">

          <div className = "  col d-flex justify-content-start ">

            <img src= {logo2} style = {{width:200, height: 80}}></img>

          </div>

          <div className = "col d-flex justify-content-end ">
          <div className = "  me-4 mt-3 cont">
            <a className = "btn btn-secondary">
              contacto
            </a> 
          </div>

          <div className = " me-4 mt-3  ini " >
            <a className = "btn btn-secondary" href = "http://localhost:3000/secion">
              inicio secion
            </a>
          </div>

          <div className = " me-5 mt-3  ini " >
            <a className = "btn btn-secondary" href = "http://localhost:3000/registro">
              registro
            </a>
          </div>

          </div>

          

        </div>


        </header>

        <div >


            <div className = " col-12 ">

                <div className = "row justify-content-center">
                <h1 className = " w-75 titulo text-center">
                    Anomalias en una red de datos usando el protogolo BGP
                </h1>
                </div>

                <div className = "row justify-content-center">
                <p className = "w-75 arg1 text-justify" >
                    La reciente evolución de la tecnología permite que los
                    equipos de red transmitan continuamente una gran cantidad
                    de información de "telemetría", que pertenece a múltiples 
                    protocolos y capas de la pila, en un grano espacial muy 
                    fino y en alta frecuencia. El procesamiento de esta 
                    avalancha de datos de telemetría en tiempo real ofrece 
                    claramente nuevas oportunidades para el control de la red 
                    y la resolución de problemas, pero también plantea serios 
                    desafíos.
                </p>
                </div>

                <div className = " row justify-content-center ">
                <p className = "w-75 arg2 text-justify">

                    Abordamos este desafío aplicando técnicas de streaming de 
                    aprendizaje automático al flujo continuo de control y datos 
                    de telemetría del plano de datos, con el propósito de la 
                    detección en tiempo real de anomalías de BGP.
                </p>

                </div>



            </div>






        </div>

    </div>

    );
}

export default pginicio;