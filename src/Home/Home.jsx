import "./Home.css";

import usuarios from "../Utils/usuarios.json"

export function Home() {

    console.log(usuarios[0])
  
  
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
                  <h2 className="text-muted">  {usuarios[0].empresa} </h2>
                  <h4 className="text-muted">  {usuarios[0].nit} </h4>
  
                {/* alt + z para organizar el texto */}
                <p>
                  <hr />
                  ACTIVIDAD ECONOMICA:
                  <br />
                  {usuarios[0].actividadEconomica}
                </p>
              </div>
  
              <div className="col-12 col-md-6">

                  <div className="row">
                      <div className="col-12 col-md-2 ps-5">
                        <i class="bi bi-clipboard-data-fill fs-1 fuente"></i>
                      </div>
  
                      <div className="col-12 col-md-10 mt-3">
                        <p><b>Sector Económico:</b> {usuarios[0].sectorEconomico} </p>
                        <hr />                        
                      </div>

                      <div className="col-12 col-md-2 ps-5">
                        <i class="bi bi-award-fill fs-1 fuente"></i>
                      </div>
  
                      <div className="col-12 col-md-10 mt-3">
                        <p><b>Grupo Económico:</b> {usuarios[0].grupoEconomico} </p>
                        <hr />                        
                      </div>

                      <div className="col-12 col-md-2 ps-5">
                        <i class="bi bi-people-fill fs-1 fuente"></i>
                      </div>
  
                      <div className="col-12 col-md-10 mt-3">
                        <p><b>Afiliados:</b> {usuarios[0].afiliados} </p>
                        <hr />                        
                      </div>

                      <div className="col-12 col-md-2 ps-5">
                        <i class="bi bi-crosshair2 fs-1 fuente"></i>
                      </div>
  
                      <div className="col-12 col-md-10 mt-3">
                        <p><b>Direccion Principal:</b> {usuarios[0].direccion} </p>
                        <hr />                        
                      </div>

                      <div className="col-12 col-md-2 ps-5">
                        <i class="bi bi-house-check-fill fs-1 fuente"></i>
                      </div>
  
                      <div className="col-12 col-md-10 mt-3">
                        <p><b>Municipio:</b> {usuarios[0].municipio} </p>
                        <hr />                        
                      </div>

                      <div className="col-12 col-md-2 ps-5">
                        <i class="bi bi-boxes fs-1 fuente"></i>
                      </div>
  
                      <div className="col-12 col-md-10 mt-3">
                        <p><b>Departamento:</b> {usuarios[0].departamento} </p>                         
                        <hr />                        
                      </div>
                  </div>

              </div>
            </div>
          </section>
  
          <hr />
  
          <section className="container my-5">
            <div className="row">
              <div className="col-12 col-md-10">
                <h4> {usuarios[0].empresa}, </h4>
                <h5> <i class="bi bi-exclamation-triangle-fill"></i>  A continuación se relacionan los accidentes de trabajo que ha tenido durante este año:</h5>
              </div>

              <select class="form-select" aria-label="Default select example">
                  <option selected>Todo</option>
                  <option value="1">Grave</option>
                  <option value="2">Severo</option>
                  <option value="3">Mortal</option>
                </select>
  
            </div>
          </section>
  
          <hr />

      
  
          <section className="container my-4">
            <div className="row row-cols-1 row-cols-md-3 g-3 ">
              {
                usuarios[0].accidentes.map(function(AT){
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