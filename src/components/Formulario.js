import React,{useState} from 'react';

function Formulario({consultarapiletra}){

    const [busqueda,agregarbusqueda]=useState({
        artista:'',
        cancion:''
    })
    //Funcion Para Actualizar el State de los Imputs

    const actualizarstate = e =>{
        agregarbusqueda({
            ...busqueda,
            [e.target.name]:e.target.value
        });
    }

    //Cuando hacemos submit al form

    const enviarinfo= e =>{

        e.preventDefault();
        consultarapiletra(busqueda);
    }




    return(
        <div className="bg-info">
          <div className="container">
              <div className="row">
                  <form 
                  onSubmit={enviarinfo}
                    className="col card text-white bg-transparent  mb-5 pt-5 pb-2">
                      <fieldset>
                          <legend className="text-center">Buscador Letras Canciones</legend>
                          <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                    <label>Artista</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        name="artista" 
                                        placeholder="Nombre Artista"
                                        onChange={actualizarstate}
                                        required
                                    />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                    <label>Canción</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        name="cancion" 
                                        placeholder="Nombre Canción" 
                                        onChange={actualizarstate}
                                        required
                                    />
                                </div>
                              </div>
                          </div>
                          <button type="submit" className="btn btn-primary float-right">Buscar</button>
                      </fieldset>
                  </form>
              </div>
          </div>
      </div>
    )
}

export default Formulario;