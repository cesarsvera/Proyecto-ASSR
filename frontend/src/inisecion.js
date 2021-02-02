import logo from './logo.svg';
import './inisecion.css';
import logo2 from './logo.png';


function Inisecion(){  
  return (
    <div className="inisecion">
      <header className="inisecion-header">
      


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

          <div className = " me-5 mt-3  ini " >
            <a className = "btn btn-secondary" href = "http://localhost:3000/registro">
              registro
            </a>
          </div>

          </div>

          

        </div>


      </header>

      <form method = "POST" action = "http://localhost:3001/login">       
        <div className="container px-4 mt-5 p-3  inise" >
            <div className = "usuario">
              <h1>
                <i class="bi bi-person-fill"></i>
              </h1>

            </div>




            <div className = "d-flex justify-content-center" >
                <div className = "input-group mb-3">
                <span class="input-group-text" id="basic-addon1"> <i class="bi bi-person-square"></i> </span>
                    <input className = "form-control " type ="text" size = "20" placeholder = " Correo electronico" name = "correo" required >
                    </input><br></br>
                </div>
            </div>


            <div className = "d-flex justify-content-center" >

                <div className = "input-group mb-3">
                    <span class="input-group-text" id="basic-addon1"> <i class="bi bi-file-lock-fill"> </i></span>
                    <input className = "form-control" type ="text" size = "20" placeholder = "Contraseña" name = "passwd" required ></input><br></br>
                    
                </div>
            </div>

            <div className = "row gx-5">

              <div class="btn-group" role="group" aria-label="Basic example">
                <input type="submit" class="btn btn-primary" value = "Enviar" />
              </div>


            </div>


            

        </div>
      </form>     
      
      
    </div>
  );
}

export default Inisecion;
