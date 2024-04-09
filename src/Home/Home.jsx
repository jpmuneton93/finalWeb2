import "./Home.css";

import usuarios from "../Utils/usuarios.json"

import { useLocation } from "react-router-dom";

export function Home() {

  let location=useLocation();
  let usuarios=location.state?.usuarios;

    console.log(usuarios)
    console.log(usuarios.lenght)
  
  
      return (  //ZONA DE RENDERIZADO
  
        <>

          <header> 
            <div className="container">
              <img src="../../src/assets/logo-sura.png" alt="logo" className="img-fluid" width={150} />
            </div>
          </header>

          <div className="header2">
          <div className="container">
            <div className="header2title ms-4"> ARL </div>
            </div>
          </div>

          <section className="container mt-5">

            {/* mt-5  = margin top 5rem ;  my = margin  y (top and bottom) ; mx = margin x (left and right) ; ms = margin start ; me = margin end */}
            
            <div className="titulo mb-5">
              <h3> <i class="bi bi-ui-checks-grid"></i> Gestiona tus accidentes de trabajo</h3>
              <hr />
             </div>

            <div className="row">
              {/* div.col-12.col-md-6 */}
  
              <div className="col-12 col-md-6">
                  <h3 className="fuente">Empresa</h3>
                  <h2 className="text-muted">  {usuarios.empresa} </h2>
                  <h4 className="text-muted">  {usuarios.nit} </h4>
  
                {/* alt + z para organizar el texto */}
                <p className="text-muted">
                  <hr />
                  <b>ACTIVIDAD ECONOMICA:</b>
                  <br />
                  {usuarios.actividadEconomica}
                </p>

                <div className="container mt-5 ">
                  <img src="../../src/assets/dibujoriesgo.jpg" alt="logo" className="img-fluid" width={200} />
                </div>

              </div>

              

  
              <div className="col-12 col-md-6">

                  <div className="row">
                      <div className="col-12 col-md-2 ps-5">
                        <i class="bi bi-clipboard-data-fill fs-1 fuente"></i>
                      </div>
  
                      <div className="col-12 col-md-10 mt-3">
                        <p><b>Sector Económico:</b> {usuarios.sectorEconomico} </p>
                        <hr />                        
                      </div>

                      <div className="col-12 col-md-2 ps-5">
                        <i class="bi bi-award-fill fs-1 fuente"></i>
                      </div>
  
                      <div className="col-12 col-md-10 mt-3">
                        <p><b>Grupo Económico:</b> {usuarios.grupoEconomico} </p>
                        <hr />                        
                      </div>

                      <div className="col-12 col-md-2 ps-5">
                        <i class="bi bi-people-fill fs-1 fuente"></i>
                      </div>
  
                      <div className="col-12 col-md-10 mt-3">
                        <p><b>Afiliados:</b> {usuarios.afiliados} </p>
                        <hr />                        
                      </div>

                      <div className="col-12 col-md-2 ps-5">
                        <i class="bi bi-crosshair2 fs-1 fuente"></i>
                      </div>
  
                      <div className="col-12 col-md-10 mt-3">
                        <p><b>Direccion Principal:</b> {usuarios.direccion} </p>
                        <hr />                        
                      </div>

                      <div className="col-12 col-md-2 ps-5">
                        <i class="bi bi-house-check-fill fs-1 fuente"></i>
                      </div>
  
                      <div className="col-12 col-md-10 mt-3">
                        <p><b>Municipio:</b> {usuarios.municipio} </p>
                        <hr />                        
                      </div>

                      <div className="col-12 col-md-2 ps-5">
                        <i class="bi bi-boxes fs-1 fuente"></i>
                      </div>
  
                      <div className="col-12 col-md-10 mt-3">
                        <p><b>Departamento:</b> {usuarios.departamento} </p>                         
                        <hr />                        
                      </div>
                  </div>

              </div>
            </div>
          </section>
  
          <hr />
  
          <section className="container my-5 d-flex justify-content-center">
            <div className="row">
              <div className="col-12 col-md-12">
                <h4> <i class="bi bi-exclamation-triangle-fill"></i> {usuarios.empresa}, </h4>
                <h5>  A continuación se relacionan los accidentes de trabajo que ha tenido durante este año:</h5>
              </div>

              <select class="form-select" aria-label="Default select example">
                  <option selected>Todo</option>
                  <option value="1">Grave</option>
                  <option value="2">Severo</option>
                  <option value="3">Mortal</option>
                </select>
  
            </div>
          </section>
        
  
          <section className="container my-4">
            <div className="row row-cols-1 row-cols-md-3 g-3 ">
              {
                usuarios.accidentes.map(function(AT){
                  return (
                    <div className="col">
                      <div className="card h-100 shadow px-2 pt-3">
                        <h4> {AT.empleado} </h4>
                        <p> <b>ID:</b> {AT.cedula} </p>
                        <p> <b>Edad:</b> {AT.edad} </p>
                        <p> <b>Sexo:</b> {AT.sexo} </p>
                        <p> <b>Cargo:</b> {AT.cargo} </p>
                        <p> <b>Diagnóstico:</b> {AT.diagnostico} </p>
                        <p> <b>Tipo de Riesgo:</b> {AT.tipoRiesgo} </p>
                        <p> <b>Días IT:</b> {AT.dias} </p>
                        <p> <b>{AT.fuente}</b> </p>
  
                      </div>
                    </div>
                  )
                })
              }
  
            </div>
          </section>
  
          
        </>
      );
      
  }