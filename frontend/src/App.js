import logo from './logo.svg';
import './App.css';
import logo2 from './logo.png';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
      


        <div className = " row ">

          <div className = "  col d-flex justify-content-start ">

            <img src= {logo2} style = {{width:200, height: 80}}></img>

          </div>

          <div className = "col d-flex justify-content-end ">
          <div className = "  me-3 mt-3 cont">
            <a className = "btn btn-secondary" >
              contacto
            </a>
          </div>

          <div className = " me-3 mt-3  ini " >
            <a className = "btn btn-secondary" href = "http://localhost:3000/secion">
              inicio secion
            </a>
          </div>

          <div className = " me-5 mt-3  ini " >
            <a className = "btn btn-secondary" href = "http://localhost:3000">
              inicio 
            </a>
          </div>

          </div>

          

        </div>


      </header>

      <form method = "POST" action = "http://localhost:3001/form">       
        <div className="container px-4 mt-5 p-3  forma" >
            <div className = "usuario">
              <h1>
                <i class="bi bi-person-circle"></i>
              </h1>

            </div>


            <div className = "row gx-5" >
              <div className = "col">
                <input className = "form-control" type ="text" size = "20" placeholder = "Escriba su apellido" name = "apellido" required></input><br></br>
              </div>
              <div className = "col">
                <input className = "form-control" type = "text" placeholder = "Escriba su nombre "  name = "nombre" required></input><br></br>
              </div>
            </div>


            <div className = "row gx-5" >
              <div className = "col">
               <input className = "form-control" type ="text" size = "20" placeholder = "Correo electronico"  name = "correo" required></input><br></br>
              </div>
            </div>
             <div className = "row gx-5" >
              <div className = "col">
                <input className = "form-control" type ="text" size = "20" placeholder = "Provincia"  name = "provincia" required></input><br></br>
              </div>
              <div className = "col">
                <input className = "form-control" type = "text" placeholder = "Ciudad "  name = "ciudad" required></input><br></br>
             </div>
            </div>


            <div className = "row gx-5" >
              <div className = "col">
                <input className = "form-control" type ="text" size = "20" placeholder = "Escriba su calle principal"  name = "principal" required></input><br></br>
              </div>
            </div>


            <div className = "row gx-5" >
               <div className = "col">
                <input className = "form-control" type ="text" size = "20" placeholder = "Escriba su calle secundaria"  name = "secundaria" required></input><br></br>
              </div>
            </div>


            <div className = "row gx-5" >
              <div className = "col">
                <input className = "form-control" type ="text" size = "20" placeholder = "Contraseña"  name = "passwd" required></input><br></br>
              </div>
            </div>

            <div className = "row gx-5">

              <div class="btn-group" role="group" aria-label="Basic example">
                <input type="submit" class="btn btn-primary" value = "Enviar"/>
              </div>


            </div>

        </div>
      </form>
      
      
    </div>
  );
}

export default App;
